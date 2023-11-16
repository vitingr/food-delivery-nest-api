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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseController = void 0;
const common_1 = require("@nestjs/common");
const purchase_1 = require("../dtos/purchase");
const purchase_repository_1 = __importDefault(require("../repositories/purchase-repository"));
let PurchaseController = class PurchaseController {
    constructor(purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }
    async createPurchase(body) {
        const { user, restaurant, products, quantity, totalValue, commentaries, paymentMethod, takeOption, deliveryAddress, deliveryPlace, restaurantLogo, restaurantName, deliveryTime, deliveryValue, delivered } = body;
        try {
            await this.purchaseRepository.create(user, restaurant, products, quantity, totalValue, commentaries, paymentMethod, takeOption, deliveryAddress, deliveryPlace, restaurantLogo, restaurantName, deliveryTime, deliveryValue, delivered);
        }
        catch (error) {
            console.log(error);
        }
    }
    async removePurchase(body) {
        const { purchaseId } = body;
        try {
            await this.purchaseRepository.removePurchase(purchaseId);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getPurchase(userId) {
        try {
            const result = await this.purchaseRepository.get(userId);
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getRestaurantPurchases(restaurantId) {
        try {
            const result = await this.purchaseRepository.getRestaurantPurchases(restaurantId);
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.PurchaseController = PurchaseController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchase_1.CreatePurchase]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "createPurchase", null);
__decorate([
    (0, common_1.Post)('remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchase_1.removePurchase]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "removePurchase", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "getPurchase", null);
__decorate([
    (0, common_1.Get)('restaurantPurchases/:restaurantId'),
    __param(0, (0, common_1.Param)('restaurantId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "getRestaurantPurchases", null);
exports.PurchaseController = PurchaseController = __decorate([
    (0, common_1.Controller)('purchase'),
    __metadata("design:paramtypes", [purchase_repository_1.default])
], PurchaseController);
//# sourceMappingURL=purchase.controller.js.map