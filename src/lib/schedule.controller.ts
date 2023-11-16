import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createSchedule, removeSchedule } from 'src/dtos/schedule';
import ScheduleRepository from 'src/repositories/schedule-repository';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleRepository: ScheduleRepository) { }

  @Post('create')
  async createSchedule(@Body() body: createSchedule) {
    const { userId } = body
    try {
      await this.scheduleRepository.create(userId)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('remove')
  async removeSchedule(@Body() body: removeSchedule) {
    const { userId } = body
    try {
      await this.scheduleRepository.remove(userId)
    } catch (error) {
      console.log(error)
    }
  }

  @Get(':userId')
  async getSchedulesByUserId(@Param("userId") userId: string) {
    try {
      const response = await this.scheduleRepository.get(userId)
      return JSON.stringify(response)
    } catch (error) {
      console.log(error)
    }
  }  
}
