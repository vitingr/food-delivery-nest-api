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
exports.AvaliationController = void 0;
const common_1 = require("@nestjs/common");
const avaliation_1 = require("../dtos/avaliation");
const avaliation_repository_1 = __importDefault(require("../repositories/avaliation-repository"));
let AvaliationController = class AvaliationController {
    constructor(avaliationRepository) {
        this.avaliationRepository = avaliationRepository;
    }
    async createAvaliation(body) {
        const { user, restaurant, restaurantName, username, stars, avaliationText, data } = body;
        try {
            await this.avaliationRepository.create(user, restaurant, restaurantName, username, stars, avaliationText, data);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getRestaurantAvaliations(restaurantId) {
        try {
            const response = await this.avaliationRepository.get(restaurantId);
            return JSON.stringify(response);
        }
        catch (error) {
            console.log(error);
        }
    }
    async removeAvaliation(body) {
        const { id } = body;
        try {
            await this.avaliationRepository.remove(id);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.AvaliationController = AvaliationController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [avaliation_1.createAvaliation]),
    __metadata("design:returntype", Promise)
], AvaliationController.prototype, "createAvaliation", null);
__decorate([
    (0, common_1.Get)(':restaurantId'),
    __param(0, (0, common_1.Param)('restaurantId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AvaliationController.prototype, "getRestaurantAvaliations", null);
__decorate([
    (0, common_1.Post)('remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [avaliation_1.removeRestaurantAvaliation]),
    __metadata("design:returntype", Promise)
], AvaliationController.prototype, "removeAvaliation", null);
exports.AvaliationController = AvaliationController = __decorate([
    (0, common_1.Controller)('avaliation'),
    __metadata("design:paramtypes", [avaliation_repository_1.default])
], AvaliationController);
//# sourceMappingURL=avaliation.controller.js.map