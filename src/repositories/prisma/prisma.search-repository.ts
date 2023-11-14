import { Injectable } from "@nestjs/common";
import searchRepository from "../search-repository";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class prismaSearchRepository implements searchRepository {
  constructor(
    private prisma: PrismaService
  ) { }

  async search(
    text: string
  ): Promise<any> {

    let items = []

    
    try {
      const products = await this.prisma.product.findMany({
        where: {
          productName: {
            contains: text,
            mode: "insensitive"
          }
        }
      })
      if (products.length >= 1) {
        items.push(products)
      }

      const restaurants = await this.prisma.restaurant.findMany({
        where: {
          restaurantName: {
            contains: text,
            mode: "insensitive"
          }
        }
      })
      if (restaurants.length >= 1) {
        items.push(restaurants)
      }

      return items

    } catch (error) {
      console.log(error)
    }
  }
}
