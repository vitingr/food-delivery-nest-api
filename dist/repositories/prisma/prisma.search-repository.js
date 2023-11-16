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
exports.prismaSearchRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let prismaSearchRepository = class prismaSearchRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async search(text) {
        let items = [];
        try {
            const products = await this.prisma.product.findMany({
                where: {
                    productName: {
                        contains: text,
                        mode: "insensitive"
                    }
                }
            });
            if (products.length >= 1) {
                items.push(products);
            }
            const restaurants = await this.prisma.restaurant.findMany({
                where: {
                    restaurantName: {
                        contains: text,
                        mode: "insensitive"
                    }
                }
            });
            if (restaurants.length >= 1) {
                items.push(restaurants);
            }
            return items;
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.prismaSearchRepository = prismaSearchRepository;
exports.prismaSearchRepository = prismaSearchRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], prismaSearchRepository);
//# sourceMappingURL=prisma.search-repository.js.map