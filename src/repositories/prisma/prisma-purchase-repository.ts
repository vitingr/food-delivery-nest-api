import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import PurchaseRepository from "../purchase-repository";

@Injectable()
export class PrismaPurchaseRepository implements PurchaseRepository {
  constructor(
    private prisma: PrismaService
  ) { }

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
    deliveryPlace: string,
    restaurantLogo: string,
    restaurantName: string,
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
        deliveryPlace: deliveryPlace,
        restaurantLogo: restaurantLogo,
        restaurantName: restaurantName,
        deliveryTime: deliveryTime,
        deliveryValue: deliveryValue,
        delivered: delivered,
      }
    })

    const ids = products.split(" ")

    await this.prisma.product.updateMany({
      where: {
        id: {
          in: ids
        }
      }, 
      data: {
        sales: { increment: 1 }
      }
    })

    let userInfo = await this.prisma.user.findUnique({
      where: {
        id: user
      }
    })

    await this.prisma.user.update({
      where: {
        id: user
      },
      data: {
        money: userInfo.money += totalValue
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

  async removePurchase(
    purchaseId: string
  ): Promise<void> {
    await this.prisma.purchase.delete({
      where: {
        id: purchaseId
      }
    })
  }

  async getRestaurantPurchases(
    restaurantId: string
  ): Promise<any> {
    return await this.prisma.purchase.findMany({
      where: {
        restaurant: restaurantId
      }
    })
  }
}