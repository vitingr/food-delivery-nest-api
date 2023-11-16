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
exports.PrismaCategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let PrismaCategoryRepository = class PrismaCategoryRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(restaurant, categoryName, categoryDescription) {
        await this.prisma.category.create({
            data: {
                restaurant: restaurant,
                categoryName: categoryName,
                categoryDescription: categoryDescription
            }
        });
    }
    async get(restaurant) {
        return await this.prisma.category.findMany({
            where: {
                restaurant: restaurant
            }
        });
    }
    async remove(id) {
        await this.prisma.category.delete({
            where: {
                id: id
            }
        });
    }
    async update(id, restaurant, categoryName, categoryDescription, quantityItems) {
        await this.prisma.category.update({
            where: {
                id: id
            },
            data: {
                restaurant: restaurant,
                categoryName: categoryName,
                categoryDescription: categoryDescription,
                quantityItems: quantityItems
            }
        });
    }
};
exports.PrismaCategoryRepository = PrismaCategoryRepository;
exports.PrismaCategoryRepository = PrismaCategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaCategoryRepository);
//# sourceMappingURL=prisma-category-repository.js.map