export class createDayItem {
  userId: string;
  day: string;
  restaurant: string;
  restaurantName: string;
  productId: string;
  productFoto: string;
  quantityItems: number;
  totalValue: number;
  deliveryHour: number;
  productName: string;
}

export class removeDayItem {
  dayItemId: string;
}

export class get {
  userId: string;
}