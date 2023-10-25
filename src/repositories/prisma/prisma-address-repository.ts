import { Injectable } from "@nestjs/common";
import AddressRepository from "../address-repository";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(
    user: string,
    state: string,
    city: string,
    street: string,
    address: number,
  ): Promise<void> {
    await this.prisma.address.create({
      data: {
        user: user,
        state: state,
        city: city,
        street: street,
        address: address,
      }
    })
  }

  async getAddressById(
    addressId: string
  ): Promise<any> {
    return await this.prisma.address.findUnique({
      where: {
        id: addressId
      }
    })
  }

  async get(
    userId: string
  ): Promise<any> {
    return await this.prisma.address.findMany({
      where: {
        user: userId
      }
    })
  }

  async getAllAddress():Promise<any> {
    return await this.prisma.address.findMany()
  }
}