export class createAvaliation {
  user: string;
  restaurant: string;
  restaurantName: string;
  username: string;
  stars: number;
  avaliationText: string;
  data: string;
}

export class getRestaurantAvaliations {
  restaurantId: string;
}

export class removeRestaurantAvaliation {
  id: string;
}