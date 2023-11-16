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
exports.DayitemController = void 0;
const common_1 = require("@nestjs/common");
const dayItem_1 = require("../dtos/dayItem");
const day_item_repository_1 = __importDefault(require("../repositories/day-item-repository"));
let DayitemController = class DayitemController {
    constructor(dayItemRepository) {
        this.dayItemRepository = dayItemRepository;
    }
    async createDayItem(body) {
        const { userId, day, restaurant, restaurantName, productId, productFoto, quantityItems, totalValue, deliveryHour, productName } = body;
        try {
            await this.dayItemRepository.create(userId, day, restaurant, restaurantName, productId, productFoto, quantityItems, totalValue, deliveryHour, productName);
        }
        catch (error) {
            console.log(error);
        }
    }
    async removeDayItem(body) {
        const { dayItemId } = body;
        try {
            await this.dayItemRepository.remove(dayItemId);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getDayItemsByUserId(userId) {
        try {
            const response = await this.dayItemRepository.get(userId);
            return JSON.stringify(response);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.DayitemController = DayitemController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dayItem_1.createDayItem]),
    __metadata("design:returntype", Promise)
], DayitemController.prototype, "createDayItem", null);
__decorate([
    (0, common_1.Post)('remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dayItem_1.removeDayItem]),
    __metadata("design:returntype", Promise)
], DayitemController.prototype, "removeDayItem", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DayitemController.prototype, "getDayItemsByUserId", null);
exports.DayitemController = DayitemController = __decorate([
    (0, common_1.Controller)('dayitem'),
    __metadata("design:paramtypes", [day_item_repository_1.default])
], DayitemController);
//# sourceMappingURL=dayitem.controller.js.map