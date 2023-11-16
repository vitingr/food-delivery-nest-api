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
exports.PrismaPurchaseRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let PrismaPurchaseRepository = class PrismaPurchaseRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(user, restaurant, products, quantity, totalValue, commentaries, paymentMethod, takeOption, deliveryAddress, deliveryPlace, restaurantLogo, restaurantName, deliveryTime, deliveryValue, delivered) {
        await this.prisma.purchase.create({
            data: {
                user: user,
                restaurant: restaurant,
                products: products,
                quantity: quantity,
                totalValue: totalValue,
                commentaries: commentaries,
                paymentMethod: paymentMethod,
                takeOption: takeOption,
                deliveryAddress: deliveryAddress,
                deliveryPlace: deliveryPlace,
                restaurantLogo: restaurantLogo,
                restaurantName: restaurantName,
                deliveryTime: deliveryTime,
                deliveryValue: deliveryValue,
                delivered: delivered,
            }
        });
        const ids = products.split(" ");
        await this.prisma.product.updateMany({
            where: {
                id: {
                    in: ids
                }
            },
            data: {
                sales: { increment: 1 }
            }
        });
        let userInfo = await this.prisma.user.findUnique({
            where: {
                id: user
            }
        });
        await this.prisma.user.update({
            where: {
                id: user
            },
            data: {
                money: userInfo.money += totalValue
            }
        });
    }
    async get(userId) {
        return await this.prisma.purchase.findMany({
            where: {
                user: userId
            }
        });
    }
    async removePurchase(purchaseId) {
        await this.prisma.purchase.delete({
            where: {
                id: purchaseId
            }
        });
    }
    async getRestaurantPurchases(restaurantId) {
        return await this.prisma.purchase.findMany({
            where: {
                restaurant: restaurantId
            }
        });
    }
};
exports.PrismaPurchaseRepository = PrismaPurchaseRepository;
exports.PrismaPurchaseRepository = PrismaPurchaseRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaPurchaseRepository);
//# sourceMappingURL=prisma-purchase-repository.js.map