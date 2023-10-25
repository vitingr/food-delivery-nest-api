abstract class AddressRepository {
  abstract create(
    user: string,
    state: string,
    city: string,
    street: string,
    address: number,
  ): Promise<void>

  abstract get(
    userId: string
  ): Promise<void>

  abstract getAddressById(
    addressId: string
  ): Promise<void>

  abstract getAllAddress(): Promise<void>
}

export default AddressRepository