import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatePurchase } from './dtos/purchase';
import PurchaseRepository from './repositories/purchase-repository';

@Controller('purchase')
export class PurchaseController {
  constructor(private purchaseRepository: PurchaseRepository) { }

  @Post('create')
  async createPurchase(@Body() body: CreatePurchase) {
    const { user, restaurant, products, quantity, totalValue, commentaries, paymentMethod, takeOption, deliveryAddress, deliveryTime, deliveryValue, delivered } = body
    try {
      await this.purchaseRepository.create(user, restaurant, products, quantity, totalValue, commentaries, paymentMethod, takeOption, deliveryAddress, deliveryTime, deliveryValue, delivered)
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
}
