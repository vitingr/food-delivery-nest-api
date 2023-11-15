import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import UserRepository from '../repositories/user-repository';
import { CreateUser, UpdateUser, viewNavbar, viewRoutine } from '../dtos/user';

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

  @Post('update')
  async updateUser(@Body() body: UpdateUser) {
    const { userId, name, firstname, lastname, photo, address } = body
    try {
      await this.userRepository.update(userId, name, firstname, lastname, photo, address)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('viewMenu')
  async viewMenu(@Body() body: viewNavbar) {
    const {userId} = body
    try {
      await this.userRepository.viewNavbar(userId)
    } catch (error) {
      console.log(error)
    }
  }

  @Post('viewRoutine')
  async viewRoutine(@Body() body: viewRoutine) {
    const {userId} = body
    try {
      await this.userRepository.viewRoutine(userId)
    } catch (error) {
      console.log(error)
    }
  }
}
