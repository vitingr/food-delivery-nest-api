abstract class DayItemRepository {
  abstract create(
    userId: string,
    day: string,
    restaurant: string,
    restaurantName: string,
    productId: string,
    productFoto: string,
    quantityItems: number,
    totalValue: number,
    deliveryHour: number,
    productName: string
  ): Promise<void>

  abstract remove(
    dayItemId: string
  ): Promise<void>

  abstract get(
    userId: string
  ): Promise<void>
}

export default DayItemRepository