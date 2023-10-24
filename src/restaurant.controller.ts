import { Controller, Get, Body, Post, Param, Res } from '@nestjs/common';
import { CreateRestaurant, getRestaurant, updateRestaurant } from './dtos/restaurant';
import RestaurantRepository from './repositories/restaurant-repository';

@Controller('restaurant')
export class RestaurantController {

  constructor(private restaurantRepository: RestaurantRepository) { }

  @Get('')
  async getRestaurants() {
    const result = await this.restaurantRepository.getAllRestaurants()
    return JSON.stringify(result)
  }

  @Get(':id')
  async getRestaurant(@Param("id") id: string) {
    const result = await this.restaurantRepository.get(id)
    return JSON.stringify(result)
  }

  @Post('create')
  async createRestaurant(@Body() body: CreateRestaurant) {
    const { ownerId, email, cellphone, ownerName, ownerLastname, cpf, rg, orgaoEmissor, cnpj, restaurantName, telephone, street, city, state, address, speciality, delivery, creatorEmail } = body
    try {
      await this.restaurantRepository.create(ownerId, email, cellphone, ownerName, ownerLastname, cpf, rg, orgaoEmissor, cnpj, restaurantName, telephone, street, city, state, address, speciality, delivery, creatorEmail)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('update')
  async updateRestaurant(@Body() body: updateRestaurant) {
    const { id, ownerId, cellphone, ownerName, ownerLastname, restaurantName, telephone, street, city, state, address, speciality, delivery, logo, deliveryTime, deliveryValue, minValue } = body
    try {
      await this.restaurantRepository.updateRestaurant(id, ownerId, cellphone, ownerName, ownerLastname, restaurantName, telephone, street, city, state, address, speciality, delivery, logo, deliveryTime, deliveryValue, minValue)
    } catch (error) {
      console.log(error)
    }
  }
}

// DTO - Data Transfer Object