import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import ProductRepository from './repositories/product-repository';
import { CreateProduct } from './dtos/product';

@Controller('product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Get(':restaurant')
  async getProducts(@Param("restaurant") restaurant: string) {
    const result = await this.productRepository.get(restaurant)
    return JSON.stringify(result)
  }

  @Post('create')
  async createProduct(@Body() body: CreateProduct) {
    const {restaurant, category, productName, productDescription, productValue, productFoto} = body
    try {
      await this.productRepository.create(restaurant, category, productName, productDescription, productValue, productFoto)
    } catch (error) {
      console.log(error)
    }
  }
}
