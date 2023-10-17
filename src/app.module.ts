import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { PrismaService } from './database/prisma.service';
import RestaurantRepository from './repositories/restaurant-repository';
import { PrismaRestaurantRepository } from './repositories/prisma/prisma-restaurant-repository';
import { UserController } from './user.controller';
import UserRepository from './repositories/user-repository';
import { PrismaUserRepository } from './repositories/prisma/prisma-user-repository';

@Module({
  imports: [],
  controllers: [RestaurantController, UserController],
  providers: [PrismaService, 
    {
      provide: RestaurantRepository, 
      useClass: PrismaRestaurantRepository
    },
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    }
  ],
})
export class AppModule {}
