import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import AddressRepository from './repositories/address-repository';
import { createAddress } from './dtos/address';

@Controller('address')
export class AddressController {
  constructor(private addressRepository: AddressRepository) { }

  @Post('create')
  async createAddress(@Body() body: createAddress) {
    const {user, state, city, street, address} = body
    try {
      await this.addressRepository.create(user, state, city, street, address)
    } catch (error) {
      console.log(error)
    }
  } 

  @Get(':userId')
  async getAddress(@Param("userId") userId: string) {
    try {
      const result = await this.addressRepository.get(userId)
      return JSON.stringify(result)
    } catch (error) {
      console.log(error)
    }
  }

  @Get('/getAddressById/:addressId')
  async getAddressById(@Param("addressId") addressId: string) {
    try {
      const result = await this.addressRepository.getAddressById(addressId)
      return JSON.stringify(result)
    } catch (error) {
      console.log(error)
    }
  }

  @Get('')
  async getAllAddress() {
    try {
      const result = await this.addressRepository.getAllAddress()
      return JSON.stringify(result)
    } catch (error) {
       console.log(error)
    }
  }
}
