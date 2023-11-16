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
exports.PrismaAvaliationRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let PrismaAvaliationRepository = class PrismaAvaliationRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(user, restaurant, restaurantName, username, stars, avaliationText, data) {
        await this.prisma.avaliation.create({
            data: {
                user: user,
                restaurant: restaurant,
                restaurantName: restaurantName,
                username: username,
                stars: stars,
                avaliationText: avaliationText,
                data: data,
            }
        });
        const restaurantInfo = await this.prisma.restaurant.findUnique({
            where: {
                id: restaurant
            }
        });
        const newStars = ((restaurantInfo.totalAvaliationPoints + stars) / (restaurantInfo.quantityAvaliations + 1));
        await this.prisma.restaurant.update({
            where: {
                id: restaurant
            },
            data: {
                quantityAvaliations: { increment: 1 },
                totalAvaliationPoints: { increment: stars },
                stars: newStars
            }
        });
    }
    async get(restaurantId) {
        return await this.prisma.avaliation.findMany({
            where: {
                restaurant: restaurantId
            }
        });
    }
    async remove(id) {
        await this.prisma.avaliation.delete({
            where: {
                id: id
            }
        });
    }
};
exports.PrismaAvaliationRepository = PrismaAvaliationRepository;
exports.PrismaAvaliationRepository = PrismaAvaliationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaAvaliationRepository);
//# sourceMappingURL=prisma-avaliation-repository.js.map