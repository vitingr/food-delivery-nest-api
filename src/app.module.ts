import { Module } from '@nestjs/common';
import { RestaurantController } from './lib/restaurant.controller';
import { PrismaService } from './database/prisma.service';
import RestaurantRepository from './repositories/restaurant-repository';
import { PrismaRestaurantRepository } from './repositories/prisma/prisma-restaurant-repository';
import { UserController } from './lib/user.controller';
import UserRepository from './repositories/user-repository';
import { PrismaUserRepository } from './repositories/prisma/prisma-user-repository';
import { CategoryController } from './lib/category.controller';
import { ProductController } from './lib/product.controller';
import CategoryRepository from './repositories/category-repository';
import { PrismaCategoryRepository } from './repositories/prisma/prisma-category-repository';
import ProductRepository from './repositories/product-repository';
import { PrismaProductRepository } from './repositories/prisma/prisma-product-repository';
import { AddressController } from './lib/address.controller';
import AddressRepository from './repositories/address-repository';
import { PrismaAddressRepository } from './repositories/prisma/prisma-address-repository';
import { PurchaseController } from './lib/purchase.controller';
import { PrismaPurchaseRepository } from './repositories/prisma/prisma-purchase-repository';
import { ScheduleController } from './lib/schedule.controller';
import { DayitemController } from './lib/dayitem.controller';
import PurchaseRepository from './repositories/purchase-repository';
import ScheduleRepository from './repositories/schedule-repository';
import DayItemRepository from './repositories/day-item-repository';
import { PrismaDayItemRepository } from './repositories/prisma/prisma-day-item-repository';
import { PrismaScheduleRepository } from './repositories/prisma/prisma-schedule-repository';
import { AvaliationController } from './lib/avaliation.controller';
import AvaliationRepository from './repositories/avaliation-repository';
import { PrismaAvaliationRepository } from './repositories/prisma/prisma-avaliation-repository';
import { SearchController } from './lib/search.controller';
import searchRepository from './repositories/search-repository';
import { prismaSearchRepository } from './repositories/prisma/prisma.search-repository';

@Module({
  imports: [],
  controllers: [RestaurantController, UserController, CategoryController, ProductController, AddressController, PurchaseController, ScheduleController, DayitemController, AvaliationController, SearchController],
  providers: [PrismaService, 
    {
      provide: RestaurantRepository, 
      useClass: PrismaRestaurantRepository
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    },
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository
    },
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository
    },
    {
      provide: AddressRepository,
      useClass: PrismaAddressRepository
    },
    {
      provide: PurchaseRepository,
      useClass: PrismaPurchaseRepository
    },
    {
      provide: ScheduleRepository,
      useClass: PrismaScheduleRepository
    },
    {
      provide: DayItemRepository,
      useClass: PrismaDayItemRepository
    },
    {
      provide: AvaliationRepository,
      useClass: PrismaAvaliationRepository
    },
    {
      provide: searchRepository,
      useClass: prismaSearchRepository
    }
  ],
})
export class AppModule {}
