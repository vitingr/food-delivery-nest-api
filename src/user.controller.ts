import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import UserRepository from './repositories/user-repository';
import { CreateUser } from './dtos/user';

@Controller('user')
export class UserController {
  constructor(private userRepository: UserRepository) { }

  @Get(':email')
  async getUser(@Param("email") email: string) {
    try {
      const result = await this.userRepository.get(email)
      return JSON.stringify(result)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('create')
  async createUser(@Body() body: CreateUser) {
    const { name, firstname, lastname, email, partner, money, photo } = body
    try {
      await this.userRepository.create(name, firstname, lastname, email, partner, money, photo)
    } catch (error) {
      console.log(error)
    }
  }
}
