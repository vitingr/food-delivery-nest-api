abstract class PurchaseRepository {
  abstract create(
    user: string,
    restaurant: string,
    products: string,
    quantity: number,
    totalValue: number,
    commentaries: string,
    paymentMethod: string,
    takeOption: string,
    deliveryAddress: string,
    deliveryPlace: string,
    restaurantLogo: string,
    restaurantName: string,
    deliveryTime: string,
    deliveryValue: number,
    delivered: boolean,
  ): Promise<void>

  abstract get(
    userId: string
  ): Promise<void>

  abstract removePurchase(
    purchaseId: string
  ): Promise<void>

  abstract getRestaurantPurchases (
    restaurantId: string
  ): Promise<void>
}

export default PurchaseRepository