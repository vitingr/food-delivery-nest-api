import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createAvaliation, removeRestaurantAvaliation } from 'src/dtos/avaliation';
import AvaliationRepository from 'src/repositories/avaliation-repository';

@Controller('avaliation')
export class AvaliationController {
  constructor(private avaliationRepository: AvaliationRepository) { }

  @Post('create')
  async createAvaliation(@Body() body: createAvaliation) {
    const { user, restaurant, restaurantName, username, stars, avaliationText, data } = body
    try {
      await this.avaliationRepository.create(user, restaurant, restaurantName, username, stars, avaliationText, data)
    } catch (error) {
      console.log(error)
    }
  }

  @Get(':restaurantId')
  async getRestaurantAvaliations(@Param('restaurantId') restaurantId: string) {
    try {
      const response = await this.avaliationRepository.get(restaurantId)
      return JSON.stringify(response)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('remove')
  async removeAvaliation(@Body() body: removeRestaurantAvaliation) {
    const { id } = body
    try {
      await this.avaliationRepository.remove(id)
    } catch (error) {
      console.log(error)
    }
  }
}
