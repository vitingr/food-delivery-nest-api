export class CreatePurchase {
  user: string;
  restaurant: string;
  products: string;
  quantity: number;
  totalValue: number;
  commentaries: string;
  paymentMethod: string;
  takeOption: string;
  deliveryAddress: string;
  deliveryPlace: string;
  restaurantLogo: string;
  restaurantName: string;
  deliveryTime: string;
  deliveryValue: number;
  delivered: boolean;
}

export class get {
  userId: string
}

export class removePurchase {
  purchaseId: string
}

export class getRestaurantPurchases {
  restaurantId: string
}