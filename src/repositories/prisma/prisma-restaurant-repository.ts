import { PrismaService } from "src/database/prisma.service";
import RestaurantRepository from '../restaurant-repository'
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaRestaurantRepository implements RestaurantRepository {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(
    ownerId: string,
    email: string,
    cellphone: string,
    ownerName: string,
    ownerLastname: string,
    cpf: string,
    rg: string,
    orgaoEmissor: string,
    cnpj: string,
    restaurantName: string,
    telephone: string,
    street: string,
    city: string,
    state: string,
    address: number,
    speciality: string,
    delivery: string,
    creatorEmail: string
  ): Promise<void> {
    const response = await this.prisma.restaurant.create({
      data: {
        ownerId: ownerId,
        email: email,
        cellphone: cellphone,
        ownerName: ownerName,
        ownerLastname: ownerLastname,
        cpf: cpf,
        rg: rg,
        orgaoEmissor: orgaoEmissor,
        cnpj: cnpj,
        restaurantName: restaurantName,
        telephone: telephone,
        street: street,
        city: city,
        state: state,
        address: address,
        speciality: speciality,
        delivery: delivery
      }
    })

    await this.prisma.user.update({
      where: {
        email: creatorEmail
      },
      data: {
        partner: true,
        restaurantId: response.id
      }
    })
  }

  async get(
    id: string
  ): Promise<any> {
    const response = await this.prisma.restaurant.findUnique({
      where: {
        id: id
      }
    })
    return response
  }

  async getAllRestaurants(): Promise<any> {
    const response = await this.prisma.restaurant.findMany()
    return response
  }
}