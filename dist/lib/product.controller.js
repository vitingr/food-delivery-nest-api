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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = __importDefault(require("../repositories/product-repository"));
const product_1 = require("../dtos/product");
let ProductController = class ProductController {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getAllProducts() {
        const result = await this.productRepository.getAllProducts();
        return JSON.stringify(result);
    }
    async getProducts(restaurant) {
        const result = await this.productRepository.get(restaurant);
        return JSON.stringify(result);
    }
    async createProduct(body) {
        const { restaurant, category, productName, productDescription, productValue, productFoto } = body;
        try {
            await this.productRepository.create(restaurant, category, productName, productDescription, productValue, productFoto);
        }
        catch (error) {
            console.log(error);
        }
    }
    async removeProduct(body) {
        const { id } = body;
        try {
            await this.productRepository.remove(id);
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateProduct(body) {
        const { id, productName, productDescription, productValue, productFoto } = body;
        try {
            await this.productRepository.update(id, productName, productDescription, productValue, productFoto);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllRestaurantProducts(productsIds) {
        try {
            const result = await this.productRepository.getRestaurantProducts(productsIds);
            return JSON.stringify(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    async favoriteProduct(body) {
        const { id, productId } = body;
        try {
            await this.productRepository.favoriteProduct(id, productId);
        }
        catch (error) {
            console.log(error);
        }
    }
    async removeFavoriteProduct(body) {
        const { id, productId } = body;
        try {
            await this.productRepository.removeFavorite(id, productId);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, common_1.Get)(':restaurant'),
    __param(0, (0, common_1.Param)("restaurant")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_1.CreateProduct]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Post)('remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_1.removeProduct]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "removeProduct", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_1.updateProduct]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Get)('getRestaurantProducts/:productsIds'),
    __param(0, (0, common_1.Param)("productsIds")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllRestaurantProducts", null);
__decorate([
    (0, common_1.Post)('favorite'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_1.favoriteProduct]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "favoriteProduct", null);
__decorate([
    (0, common_1.Post)('removeFavorite'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_1.removeFavorite]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "removeFavoriteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_repository_1.default])
], ProductController);
//# sourceMappingURL=product.controller.js.map