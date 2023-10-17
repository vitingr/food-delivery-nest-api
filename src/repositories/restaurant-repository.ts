abstract class RestaurantRepository {
  abstract create(
    email: string,
    cellphone: string,
    ownerName: string,
    ownerLastname: string,
    cpf: string,
    rg: string,
    orgaoEmissor: string,
    cnpj: string,
    restaurantName: string,
    telephone: string,
    street: string,
    city: string,
    state: string,
    address: number,
    speciality: string,
    delivery: string
  ): Promise<void>

  abstract get(
    id: string
  ): Promise<void>
}

export default RestaurantRepository