import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import searchRepository from 'src/repositories/search-repository';

@Controller('search')
export class SearchController {
  constructor (private searchRepository: searchRepository) {}

  @Post(':text')
  async getItemsByText(@Param("text") text: string) {
    try {
      const response = await this.searchRepository.search(text)
      return JSON.stringify(response)
    } catch (error) {
      console.log(error)
    }
  }
}
