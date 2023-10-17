import { Controller, Get, Body, Post, Param, Res } from '@nestjs/common';
import { CreateRestaurant, getRestaurant } from './dtos/create-restaurant';
import RestaurantRepository from './repositories/restaurant-repository';

@Controller('restaurant')
export class RestaurantController {

  constructor(private restaurantRepository: RestaurantRepository) { }

  @Get(':id')
  async getRestaurant(@Param("id") id : string) {
    const result = await this.restaurantRepository.get(id)
  }

  @Post('create')
  async createRestaurant(@Body() body: CreateRestaurant) {
    const { email, cellphone, ownerName, ownerLastname, cpf, rg, orgaoEmissor, cnpj, restaurantName, telephone, street, city, state, address, speciality, delivery } = body
    try {
      await this.restaurantRepository.create(email, cellphone, ownerName, ownerLastname, cpf, rg, orgaoEmissor, cnpj, restaurantName, telephone, street, city, state, address, speciality, delivery)
    } catch (error) {
      console.log(error)
    }
  }
}

// DTO - Data Transfer Object