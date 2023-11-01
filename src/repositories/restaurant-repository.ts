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
    cellphone: string,
    ownerName: string,
    ownerLastname: string,
    restaurantName: string,
    telephone: string,
    street: string,
    city: string,
    state: string,
    address: number,
    speciality: string,
    delivery: string,
    logo: string,
    background: string,
    deliveryTime: string,
    deliveryValue: number,
    minValue: number,
    openingHour: number,
    closingHour: number
  ): Promise<void>

  abstract findRestaurantBySpeciality (
    speciality: string
  ): Promise<void>

}

export default RestaurantRepository