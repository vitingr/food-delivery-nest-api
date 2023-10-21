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
}

export default AddressRepository