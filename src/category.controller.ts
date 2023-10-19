import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import CategoryRepository from './repositories/category-repository';
import { CreateCategory, removeCategory, updateCategory } from './dtos/category';

@Controller('category')
export class CategoryController {
  constructor(private categoryRepository: CategoryRepository) { }

  @Get(':restaurant')
  async getCategories(@Param("restaurant") restaurant: string) {
    try {
      const result = await this.categoryRepository.get(restaurant)
      return JSON.stringify(result)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('create')
  async createCategory(@Body() body: CreateCategory) {
    const { restaurant, categoryName, categoryDescription } = body
    try {
      await this.categoryRepository.create(restaurant, categoryName, categoryDescription)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('remove')
  async removeCategory(@Body() body: removeCategory) {
    const {id} = body
    try {
      await this.categoryRepository.remove(id)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('update')
  async updateCategories(@Body() body: updateCategory) {
    const { id, restaurant, categoryName, categoryDescription, quantityItems } = body
    try {
      await this.categoryRepository.update( id, restaurant, categoryName, categoryDescription, quantityItems)
    } catch (error) {
      console.log(error)
    }
  }
}
