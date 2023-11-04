import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatePurchase, removePurchase } from '../dtos/purchase';
import PurchaseRepository from '../repositories/purchase-repository';

@Controller('purchase')
export class PurchaseController {
  constructor(private purchaseRepository: PurchaseRepository) { }

  @Post('create')
  async createPurchase(@Body() body: CreatePurchase) {
    const { user, restaurant, products, quantity, totalValue, commentaries, paymentMethod, takeOption, deliveryAddress, deliveryPlace, restaurantLogo, restaurantName, deliveryTime, deliveryValue, delivered } = body
    try {
      await this.purchaseRepository.create(user, restaurant, products, quantity, totalValue, commentaries, paymentMethod, takeOption, deliveryAddress, deliveryPlace, restaurantLogo, restaurantName, deliveryTime, deliveryValue, delivered)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('remove')
  async removePurchase(@Body() body: removePurchase) {
    const { purchaseId } = body
    try {
      await this.purchaseRepository.removePurchase(purchaseId)
    } catch (error) {
      console.log(error)
    }
  }

  @Get(':userId')
  async getPurchase(@Param('userId') userId: string) {
    try {
      const result = await this.purchaseRepository.get(userId)
      return JSON.stringify(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  @Get('restaurantPurchases/:restaurantId')
  async getRestaurantPurchases(@Param('restaurantId') restaurantId: string) {
    try {
      const result = await this.purchaseRepository.getRestaurantPurchases(restaurantId)
      return JSON.stringify(result)
    } catch (error) {
      console.log(error)
    }
  }
}
