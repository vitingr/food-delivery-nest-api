import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import AvaliationRepository from "../avaliation-repository";

@Injectable()
export class PrismaAvaliationRepository implements AvaliationRepository {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(
    user: string,
    restaurant: string,
    restaurantName: string,
    username: string,
    stars: number,
    avaliationText: string,
    data: string,
  ): Promise<void> {
    await this.prisma.avaliation.create({
      data: {
        user: user,
        restaurant: restaurant,
        restaurantName: restaurantName,
        username: username,
        stars: stars,
        avaliationText: avaliationText,
        data: data,
      }
    })

    const restaurantInfo = await this.prisma.restaurant.findUnique({
      where: {
        id: restaurant
      }
    })

    const newStars = ((restaurantInfo.totalAvaliationPoints + stars) / (restaurantInfo.quantityAvaliations + 1))

    await this.prisma.restaurant.update({
      where: {
        id: restaurant
      },
      data: {
        quantityAvaliations: { increment: 1 },
        totalAvaliationPoints: {increment: stars},
        stars: newStars
      }
    })
  }

  async get(
    restaurantId: string
  ): Promise<any> {
    return await this.prisma.avaliation.findMany({
      where: {
        restaurant: restaurantId
      }
    })
  }

  async remove(
    id: string
  ): Promise<void> {
    await this.prisma.avaliation.delete({
      where: {
        id: id
      }
    })
  }

}