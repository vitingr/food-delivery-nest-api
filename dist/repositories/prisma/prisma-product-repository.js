"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaProductRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let PrismaProductRepository = class PrismaProductRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(restaurant, category, productName, productDescription, productValue, productFoto) {
        await this.prisma.product.create({
            data: {
                restaurant: restaurant,
                category: category,
                productName: productName,
                productDescription: productDescription,
                productValue: productValue,
                productFoto: productFoto
            }
        });
        const categoryItems = await this.prisma.category.findUnique({
            where: {
                id: category
            }
        });
        await this.prisma.category.update({
            where: {
                id: category
            },
            data: {
                quantityItems: categoryItems.quantityItems += 1
            }
        });
    }
    async get(restaurant) {
        return await this.prisma.product.findMany({
            where: {
                restaurant: restaurant
            }
        });
    }
    async remove(id) {
        await this.prisma.product.delete({
            where: {
                id: id
            }
        });
    }
    async update(id, productName, productDescription, productValue, productFoto) {
        await this.prisma.product.update({
            where: {
                id: id
            },
            data: {
                productName: productName,
                productDescription: productDescription,
                productValue: productValue,
                productFoto: productFoto,
            }
        });
    }
    async getRestaurantProducts(productsIds) {
        const ids = productsIds.split(" ");
        return await this.prisma.product.findMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
    }
    async getAllProducts() {
        return await this.prisma.product.findMany();
    }
    async favoriteProduct(id, productId) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        });
        let userFavorites;
        if (user.favorites != "") {
            userFavorites = user.favorites += ` ${productId}`;
        }
        else {
            userFavorites = `${productId}`;
        }
        await this.prisma.user.update({
            where: {
                id: id
            },
            data: {
                favorites: userFavorites
            }
        });
    }
    async removeFavorite(id, productId) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        });
        let favorites;
        if (user.favorites != "") {
            const currentUserFavorites = user.favorites.split(" ");
            const favoriteIndex = currentUserFavorites.indexOf(productId);
            currentUserFavorites.splice(favoriteIndex, 1);
            favorites = currentUserFavorites.join(" ");
        }
        await this.prisma.user.update({
            where: {
                id: id
            },
            data: {
                favorites: favorites
            }
        });
    }
};
exports.PrismaProductRepository = PrismaProductRepository;
exports.PrismaProductRepository = PrismaProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaProductRepository);
//# sourceMappingURL=prisma-product-repository.js.map