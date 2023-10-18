abstract class CategoryRepository {
  abstract create(
    restaurant: string,
    categoryName: string,
    categoryDescription: string
  ): Promise<void>

  abstract get(
    restaurant: string
  ): Promise<void>
}

export default CategoryRepository