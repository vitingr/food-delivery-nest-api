export declare class CreateProduct {
    restaurant: string;
    category: string;
    productName: string;
    productDescription: string;
    productValue: number;
    productFoto: string;
}
export declare class getProduct {
    restaurant: string;
}
export declare class removeProduct {
    id: string;
}
export declare class updateProduct {
    id: string;
    productName: string;
    productDescription: string;
    productValue: number;
    productFoto: string;
}
export declare class getRestaurantProducts {
    productsIds: string;
}
export declare class getAllProducts {
}
export declare class favoriteProduct {
    id: string;
    productId: string;
}
export declare class removeFavorite {
    id: string;
    productId: string;
}
