import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import ScheduleRepository from "../schedule-repository";

@Injectable()
export class PrismaScheduleRepository implements ScheduleRepository {
  constructor(
    private prisma: PrismaService
  ) { }

  async create(
    userId: string
  ): Promise<void> {
    await this.prisma.schedule.create({
      data: {
        user: userId
      }
    })
  }

  async remove(
    userId: string
  ): Promise<void> {
    await this.prisma.schedule.delete({
      where: {
        id: userId
      }
    })
  }

  async get(
    userId: string
  ): Promise<any> {
    return await this.prisma.schedule.findMany({
      where: {
        user: userId
      }
    })
  }
}