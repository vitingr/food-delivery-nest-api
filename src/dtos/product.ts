export class CreateProduct {
  restaurant: string;
  category: string;
  productName: string;
  productDescription: string;
  productValue: number;
  productFoto: string;
}

export class getProduct {
  restaurant: string;
}

export class removeProduct {
  id: string;
}

export class updateProduct {
  id: string;
  productName: string;
  productDescription: string;
  productValue: number;
  productFoto: string;
}

export class getRestaurantProducts {
  productsIds: string;
}