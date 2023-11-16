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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = __importDefault(require("../repositories/user-repository"));
const user_1 = require("../dtos/user");
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUser(email) {
        try {
            const result = await this.userRepository.get(email);
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    async createUser(body) {
        const { name, firstname, lastname, email, partner, money, photo } = body;
        try {
            await this.userRepository.create(name, firstname, lastname, email, partner, money, photo);
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateUser(body) {
        const { userId, name, firstname, lastname, photo, address } = body;
        try {
            await this.userRepository.update(userId, name, firstname, lastname, photo, address);
        }
        catch (error) {
            console.log(error);
        }
    }
    async viewMenu(body) {
        const { userId } = body;
        try {
            await this.userRepository.viewNavbar(userId);
        }
        catch (error) {
            console.log(error);
        }
    }
    async viewRoutine(body) {
        const { userId } = body;
        try {
            await this.userRepository.viewRoutine(userId);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.CreateUser]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UpdateUser]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Post)('viewMenu'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.viewNavbar]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "viewMenu", null);
__decorate([
    (0, common_1.Post)('viewRoutine'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.viewRoutine]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "viewRoutine", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_repository_1.default])
], UserController);
//# sourceMappingURL=user.controller.js.map