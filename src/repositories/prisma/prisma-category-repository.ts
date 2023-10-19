import { Injectable } from "@nestjs/common";
import CategoryRepository from "../category-repository";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(
    restaurant: string,
    categoryName: string,
    categoryDescription: string
  ): Promise<void> {
    await this.prisma.category.create({
      data: {
        restaurant: restaurant,
        categoryName: categoryName,
        categoryDescription: categoryDescription
      }
    })
  }

  async get(
    restaurant: string
  ): Promise<any> {
    return await this.prisma.category.findMany({
      where: {
        restaurant: restaurant
      }
    })
  }

  async remove(
    id: string
  ): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id: id
      }
    })
  }

  async update(
    id: string,
    restaurant: string,
    categoryName: string,
    categoryDescription: string,
    quantityItems: number,
  ): Promise<void> {
    await this.prisma.category.update({
      where: {
        id: id
      },
      data: {
        restaurant: restaurant,
        categoryName: categoryName,
        categoryDescription: categoryDescription,
        quantityItems: quantityItems
      }
    })
  }
}