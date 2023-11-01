import { PrismaService } from "src/database/prisma.service";
import UserRepository from "../user-repository";
import { Injectable } from "@nestjs/common";
import { userInfo } from "src/types";

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(
    name: string,
    firstname: string,
    lastname: string,
    email: string,
    partner: boolean,
    money: number,
    photo: string,
  ): Promise<void> {

    await this.prisma.user.create({
      data: {
        name: name,
        firstname: firstname,
        lastname: lastname,
        email: email,
        partner: partner,
        money: money,
        photo: photo,
      }
    })
  }

  async get(
    email: string
  ): Promise<userInfo | any> {
    const result: any = await this.prisma.user.findUnique({
      where: {
        email: email
      }
    })

    return result
  }

  async update(
    userId: string,
    name: string,
    firstname: string,
    lastname: string,
    photo: string,
    address: string
  ): Promise<void> {
    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        name: name,
        firstname: firstname,
        lastname: lastname,
        photo: photo,
        address: address
      }
    })
  }
}