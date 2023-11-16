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
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const address_repository_1 = __importDefault(require("../repositories/address-repository"));
const address_1 = require("../dtos/address");
let AddressController = class AddressController {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async createAddress(body) {
        const { user, state, city, street, address } = body;
        try {
            await this.addressRepository.create(user, state, city, street, address);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAddress(userId) {
        try {
            const result = await this.addressRepository.get(userId);
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAddressById(addressId) {
        try {
            const result = await this.addressRepository.getAddressById(addressId);
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllAddress() {
        try {
            const result = await this.addressRepository.getAllAddress();
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.AddressController = AddressController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [address_1.createAddress]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "createAddress", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "getAddress", null);
__decorate([
    (0, common_1.Get)('/getAddressById/:addressId'),
    __param(0, (0, common_1.Param)("addressId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "getAddressById", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "getAllAddress", null);
exports.AddressController = AddressController = __decorate([
    (0, common_1.Controller)('address'),
    __metadata("design:paramtypes", [address_repository_1.default])
], AddressController);
//# sourceMappingURL=address.controller.js.map