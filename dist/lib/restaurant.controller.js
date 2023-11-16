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
exports.RestaurantController = void 0;
const common_1 = require("@nestjs/common");
const restaurant_1 = require("../dtos/restaurant");
const restaurant_repository_1 = __importDefault(require("../repositories/restaurant-repository"));
let RestaurantController = class RestaurantController {
    constructor(restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }
    async getRestaurants() {
        try {
            const result = await this.restaurantRepository.getAllRestaurants();
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getRestaurant(id) {
        try {
            const result = await this.restaurantRepository.get(id);
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    async createRestaurant(body) {
        const { ownerId, email, cellphone, ownerName, ownerLastname, cpf, rg, orgaoEmissor, cnpj, restaurantName, telephone, street, city, state, address, speciality, delivery, creatorEmail } = body;
        try {
            await this.restaurantRepository.create(ownerId, email, cellphone, ownerName, ownerLastname, cpf, rg, orgaoEmissor, cnpj, restaurantName, telephone, street, city, state, address, speciality, delivery, creatorEmail);
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateRestaurant(body) {
        const { id, ownerId, cellphone, ownerName, ownerLastname, restaurantName, telephone, street, city, state, address, speciality, delivery, logo, background, deliveryTime, deliveryValue, minValue, openingHour, closingHour } = body;
        try {
            await this.restaurantRepository.updateRestaurant(id, ownerId, cellphone, ownerName, ownerLastname, restaurantName, telephone, street, city, state, address, speciality, delivery, logo, background, deliveryTime, deliveryValue, minValue, openingHour, closingHour);
        }
        catch (error) {
            console.log(error);
        }
    }
    async findRestaurantBySpeciality(speciality) {
        try {
            const result = await this.restaurantRepository.findRestaurantBySpeciality(speciality);
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.RestaurantController = RestaurantController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getRestaurants", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "getRestaurant", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_1.CreateRestaurant]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "createRestaurant", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_1.updateRestaurant]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "updateRestaurant", null);
__decorate([
    (0, common_1.Get)("findRestaurantBySpeciality/:speciality"),
    __param(0, (0, common_1.Param)("speciality")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantController.prototype, "findRestaurantBySpeciality", null);
exports.RestaurantController = RestaurantController = __decorate([
    (0, common_1.Controller)('restaurant'),
    __metadata("design:paramtypes", [restaurant_repository_1.default])
], RestaurantController);
//# sourceMappingURL=restaurant.controller.js.map