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
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const search_repository_1 = __importDefault(require("../repositories/search-repository"));
let SearchController = class SearchController {
    constructor(searchRepository) {
        this.searchRepository = searchRepository;
    }
    async getItemsByText(text) {
        try {
            if (typeof text !== "string") {
                console.log("Invalid Request");
            }
            else {
                const response = await this.searchRepository.search(text);
                return JSON.stringify(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.SearchController = SearchController;
__decorate([
    (0, common_1.Get)(':text'),
    __param(0, (0, common_1.Param)("text")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getItemsByText", null);
exports.SearchController = SearchController = __decorate([
    (0, common_1.Controller)('search'),
    __metadata("design:paramtypes", [search_repository_1.default])
], SearchController);
//# sourceMappingURL=search.controller.js.map