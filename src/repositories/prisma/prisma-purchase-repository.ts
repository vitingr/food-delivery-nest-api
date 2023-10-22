import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import PurchaseRepository from "../purchase-repository";

@Injectable()
export class PrismaPurchaseRepository implements PurchaseRepository {
  constructor (
    private prisma: PrismaService
  ) {}

  async create(
    user: string,
    restaurant: string,
    products: string,
    quantity: number,
    totalValue: number,
    commentaries: string,
    paymentMethod: string,
    takeOption: string,
    deliveryAddress: string,
    deliveryTime: string,
    deliveryValue: number,
    delivered: boolean,
  ): Promise<void> {
    await this.prisma.purchase.create({
      data: {
        user: user,
        restaurant: restaurant,
        products: products,
        quantity: quantity,
        totalValue: totalValue,
        commentaries: commentaries,
        paymentMethod: paymentMethod,
        takeOption: takeOption,
        deliveryAddress: deliveryAddress,
        deliveryTime: deliveryTime,
        deliveryValue: deliveryValue,
        delivered: delivered,
      }
    })
  }

  async get(
    userId: string
  ): Promise<any> {
    return await this.prisma.purchase.findMany({
      where: {
        user: userId
      }
    })
  }
}