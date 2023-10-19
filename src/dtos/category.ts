export class CreateCategory {
  restaurant: string;
  categoryName: string;
  categoryDescription: string;
}

export class getCategory {
  restaurant: string;
}

export class removeCategory {
  id: string;
}

export class updateCategory {
  id: string;
  restaurant: string;
  categoryName: string;
  categoryDescription: string;
  quantityItems: number;
}