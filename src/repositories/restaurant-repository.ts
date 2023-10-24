abstract class RestaurantRepository {
  abstract create(
    ownerId: string,
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
    delivery: string,
    creatorEmail: string
  ): Promise<void>

  abstract get(
    id: string
  ): Promise<void>

  abstract getAllRestaurants(): Promise<void>

  abstract updateRestaurant(
    id: string,
    ownerId: string,
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
    delivery: string,
    stars: number,
    logo: string,
    deliveryTime: string,
    deliveryValue: number,
    minValue: number
  ): Promise<void>
}

export default RestaurantRepository