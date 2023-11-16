import { Controller, Get, Param } from '@nestjs/common';
import searchRepository from 'src/repositories/search-repository';

@Controller('search')
export class SearchController {
  constructor (private searchRepository: searchRepository) {}

  @Get(':text')
  async getItemsByText(@Param("text") text: string) {
    try {
      if (typeof text !== "string") {
        console.log("Invalid Request")
      } else {
        const response = await this.searchRepository.search(text)
        return JSON.stringify(response)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
