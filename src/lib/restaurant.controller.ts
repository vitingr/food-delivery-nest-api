import { Controller, Get, Body, Post, Param, Res } from '@nestjs/common';
import { CreateRestaurant, getRestaurant, updateRestaurant } from '../dtos/restaurant';
import RestaurantRepository from '../repositories/restaurant-repository';

@Controller('restaurant')
export class RestaurantController {

  constructor(private restaurantRepository: RestaurantRepository) { }

  @Get('')
  async getRestaurants() {
    try {
      const result = await this.restaurantRepository.getAllRestaurants()
      return JSON.stringify(result)
    } catch (error) {
      console.log(error)
    }
  }

  @Get(':id')
  async getRestaurant(@Param("id") id: string) {
    try {
      const result = await this.restaurantRepository.get(id)
      return JSON.stringify(result)
    } catch (error) {
      console.log(error)
    }
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
    const { id, ownerId, cellphone, ownerName, ownerLastname, restaurantName, telephone, street, city, state, address, speciality, delivery, logo, background, deliveryTime, deliveryValue, minValue, openingHour, closingHour } = body
    try {
      await this.restaurantRepository.updateRestaurant(id, ownerId, cellphone, ownerName, ownerLastname, restaurantName, telephone, street, city, state, address, speciality, delivery, logo, background, deliveryTime, deliveryValue, minValue, openingHour, closingHour)
    } catch (error) {
      console.log(error)
    }
  }

  @Get("findRestaurantBySpeciality/:speciality")
  async findRestaurantBySpeciality(@Param("speciality") speciality: string) {
    try {
      const result = await this.restaurantRepository.findRestaurantBySpeciality(speciality)
      return JSON.stringify(result)
    } catch (error) {
      console.log(error)
    }
  }
}

// DTO - Data Transfer Object