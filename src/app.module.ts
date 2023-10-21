import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { PrismaService } from './database/prisma.service';
import RestaurantRepository from './repositories/restaurant-repository';
import { PrismaRestaurantRepository } from './repositories/prisma/prisma-restaurant-repository';
import { UserController } from './user.controller';
import UserRepository from './repositories/user-repository';
import { PrismaUserRepository } from './repositories/prisma/prisma-user-repository';
import { CategoryController } from './category.controller';
import { ProductController } from './product.controller';
import CategoryRepository from './repositories/category-repository';
import { PrismaCategoryRepository } from './repositories/prisma/prisma-category-repository';
import ProductRepository from './repositories/product-repository';
import { PrismaProductRepository } from './repositories/prisma/prisma-product-repository';
import { AddressController } from './address.controller';
import AddressRepository from './repositories/address-repository';
import { PrismaAddressRepository } from './repositories/prisma/prisma-address-repository';

@Module({
  imports: [],
  controllers: [RestaurantController, UserController, CategoryController, ProductController, AddressController],
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
    }
  ],
})
export class AppModule {}
