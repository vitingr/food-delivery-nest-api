import { Injectable } from "@nestjs/common";
import ProductRepository from "../product-repository";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(
    restaurant: string,
    category: string,
    productName: string,
    productDescription: string,
    productValue: number,
    productFoto: string
  ): Promise<void> {
    await this.prisma.product.create({
      data: {
        restaurant: restaurant,
        category: category,
        productName: productName,
        productDescription: productDescription,
        productValue: productValue,
        productFoto: productFoto
      }
    })
  }

  async get(
    restaurant: string
  ): Promise<any> {
    return await this.prisma.product.findMany({
      where: {
        restaurant: restaurant
      }
    })
  }

}