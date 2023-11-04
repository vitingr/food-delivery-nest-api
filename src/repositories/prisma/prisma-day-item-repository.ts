import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import DayItemRepository from "../day-item-repository";

@Injectable()
export class PrismaDayItemRepository implements DayItemRepository {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(
    userId: string,
    day: string,
    restaurant: string,
    restaurantName: string,
    productId: string,
    productFoto: string,
    quantityItems: number,
    totalValue: number,
    deliveryHour: number,
    productName: string,
  ): Promise<void> {

    await this.prisma.dayItem.create({
      data: {
        user: userId,
        day: day,
        restaurant: restaurant,
        restaurantName: restaurantName,
        productId: productId,
        productFoto: productFoto,
        quantityItems: quantityItems,
        totalValue: totalValue,
        deliveryHour: deliveryHour,
        productName: productName
      }
    })
  }

  async remove(
    dayItemId: string
  ): Promise<void> {
    await this.prisma.dayItem.delete({
      where: {
        id: dayItemId
      }
    })
  }

  async get(
    userId: string
  ): Promise<any> {
    return await this.prisma.dayItem.findMany({
      where: {
        user: userId
      }
    })
  }
}