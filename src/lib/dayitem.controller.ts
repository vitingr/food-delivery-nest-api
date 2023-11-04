import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createDayItem, removeDayItem } from 'src/dtos/dayItem';
import DayItemRepository from 'src/repositories/day-item-repository';

@Controller('dayitem')
export class DayitemController {
  constructor(private dayItemRepository: DayItemRepository) { }

  @Post('create')
  async createDayItem(@Body() body: createDayItem) {
    const { userId, day, restaurant, restaurantName, productId, productFoto, quantityItems, totalValue, deliveryHour, productName } = body
    try {
      await this.dayItemRepository.create(userId, day, restaurant, restaurantName, productId, productFoto, quantityItems, totalValue, deliveryHour, productName)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('remove')
  async removeDayItem(@Body() body: removeDayItem) {
    const { dayItemId } = body
    try {
      await this.dayItemRepository.remove(dayItemId)
    } catch (error) {
      console.log(error)
    }
  }

  @Get(':userId')
  async getDayItemsByUserId(@Param("userId") userId: string) {
    try {
      const response = await this.dayItemRepository.get(userId)
      return JSON.stringify(response)
    } catch (error) {
      console.log(error)
    }
  }
}
