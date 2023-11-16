"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const restaurant_controller_1 = require("./lib/restaurant.controller");
const prisma_service_1 = require("./database/prisma.service");
const restaurant_repository_1 = __importDefault(require("./repositories/restaurant-repository"));
const prisma_restaurant_repository_1 = require("./repositories/prisma/prisma-restaurant-repository");
const user_controller_1 = require("./lib/user.controller");
const user_repository_1 = __importDefault(require("./repositories/user-repository"));
const prisma_user_repository_1 = require("./repositories/prisma/prisma-user-repository");
const category_controller_1 = require("./lib/category.controller");
const product_controller_1 = require("./lib/product.controller");
const category_repository_1 = __importDefault(require("./repositories/category-repository"));
const prisma_category_repository_1 = require("./repositories/prisma/prisma-category-repository");
const product_repository_1 = __importDefault(require("./repositories/product-repository"));
const prisma_product_repository_1 = require("./repositories/prisma/prisma-product-repository");
const address_controller_1 = require("./lib/address.controller");
const address_repository_1 = __importDefault(require("./repositories/address-repository"));
const prisma_address_repository_1 = require("./repositories/prisma/prisma-address-repository");
const purchase_controller_1 = require("./lib/purchase.controller");
const prisma_purchase_repository_1 = require("./repositories/prisma/prisma-purchase-repository");
const schedule_controller_1 = require("./lib/schedule.controller");
const dayitem_controller_1 = require("./lib/dayitem.controller");
const purchase_repository_1 = __importDefault(require("./repositories/purchase-repository"));
const schedule_repository_1 = __importDefault(require("./repositories/schedule-repository"));
const day_item_repository_1 = __importDefault(require("./repositories/day-item-repository"));
const prisma_day_item_repository_1 = require("./repositories/prisma/prisma-day-item-repository");
const prisma_schedule_repository_1 = require("./repositories/prisma/prisma-schedule-repository");
const avaliation_controller_1 = require("./lib/avaliation.controller");
const avaliation_repository_1 = __importDefault(require("./repositories/avaliation-repository"));
const prisma_avaliation_repository_1 = require("./repositories/prisma/prisma-avaliation-repository");
const search_controller_1 = require("./lib/search.controller");
const search_repository_1 = __importDefault(require("./repositories/search-repository"));
const prisma_search_repository_1 = require("./repositories/prisma/prisma.search-repository");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [restaurant_controller_1.RestaurantController, user_controller_1.UserController, category_controller_1.CategoryController, product_controller_1.ProductController, address_controller_1.AddressController, purchase_controller_1.PurchaseController, schedule_controller_1.ScheduleController, dayitem_controller_1.DayitemController, avaliation_controller_1.AvaliationController, search_controller_1.SearchController],
        providers: [prisma_service_1.PrismaService,
            {
                provide: restaurant_repository_1.default,
                useClass: prisma_restaurant_repository_1.PrismaRestaurantRepository
            },
            {
                provide: user_repository_1.default,
                useClass: prisma_user_repository_1.PrismaUserRepository
            },
            {
                provide: category_repository_1.default,
                useClass: prisma_category_repository_1.PrismaCategoryRepository
            },
            {
                provide: product_repository_1.default,
                useClass: prisma_product_repository_1.PrismaProductRepository
            },
            {
                provide: address_repository_1.default,
                useClass: prisma_address_repository_1.PrismaAddressRepository
            },
            {
                provide: purchase_repository_1.default,
                useClass: prisma_purchase_repository_1.PrismaPurchaseRepository
            },
            {
                provide: schedule_repository_1.default,
                useClass: prisma_schedule_repository_1.PrismaScheduleRepository
            },
            {
                provide: day_item_repository_1.default,
                useClass: prisma_day_item_repository_1.PrismaDayItemRepository
            },
            {
                provide: avaliation_repository_1.default,
                useClass: prisma_avaliation_repository_1.PrismaAvaliationRepository
            },
            {
                provide: search_repository_1.default,
                useClass: prisma_search_repository_1.prismaSearchRepository
            }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map