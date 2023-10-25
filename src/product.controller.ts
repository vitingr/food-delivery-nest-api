import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import ProductRepository from './repositories/product-repository';
import { CreateProduct, getRestaurantProducts, removeProduct, updateProduct } from './dtos/product';

@Controller('product')
export class ProductController {
  constructor(private productRepository: ProductRepository) { }

  @Get('')
  async getAllProducts() {
    const result = await this.productRepository.getAllProducts()
    return JSON.stringify(result)
  }

  @Get(':restaurant')
  async getProducts(@Param("restaurant") restaurant: string) {
    const result = await this.productRepository.get(restaurant)
    return JSON.stringify(result)
  }

  @Post('create')
  async createProduct(@Body() body: CreateProduct) {
    const { restaurant, category, productName, productDescription, productValue, productFoto } = body
    try {
      await this.productRepository.create(restaurant, category, productName, productDescription, productValue, productFoto)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('remove')
  async removeProduct(@Body() body: removeProduct) {
    const { id } = body
    try {
      await this.productRepository.remove(id)
    } catch (error) { 
      console.log(error)
    }
  }

  @Post('update')
  async updateProduct(@Body() body: updateProduct) {
    const { id, productName, productDescription, productValue, productFoto } = body
    try {
      await this.productRepository.update(id, productName, productDescription, productValue, productFoto)
    } catch (error) {
      console.log(error)
    }
  }

  @Get('getRestaurantProducts/:productsIds')
  async getAllRestaurantProducts(@Param("productsIds") productsIds: string ) {
    try {
      const result = await this.productRepository.getRestaurantProducts(productsIds) 
      return JSON.stringify(result)
    } catch (error) {
      console.log(error)
    }
  }
}
