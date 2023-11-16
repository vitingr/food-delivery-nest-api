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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = __importDefault(require("../repositories/category-repository"));
const category_1 = require("../dtos/category");
let CategoryController = class CategoryController {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async getCategories(restaurant) {
        try {
            const result = await this.categoryRepository.get(restaurant);
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    async createCategory(body) {
        const { restaurant, categoryName, categoryDescription } = body;
        try {
            await this.categoryRepository.create(restaurant, categoryName, categoryDescription);
        }
        catch (error) {
            console.log(error);
        }
    }
    async removeCategory(body) {
        const { id } = body;
        try {
            await this.categoryRepository.remove(id);
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateCategories(body) {
        const { id, restaurant, categoryName, categoryDescription, quantityItems } = body;
        try {
            await this.categoryRepository.update(id, restaurant, categoryName, categoryDescription, quantityItems);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Get)(':restaurant'),
    __param(0, (0, common_1.Param)("restaurant")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_1.CreateCategory]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, common_1.Post)('remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_1.removeCategory]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "removeCategory", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_1.updateCategory]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateCategories", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_repository_1.default])
], CategoryController);
//# sourceMappingURL=category.controller.js.map