export declare class CreatePurchase {
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
export declare class get {
    userId: string;
}
export declare class removePurchase {
    purchaseId: string;
}
export declare class getRestaurantPurchases {
    restaurantId: string;
}
