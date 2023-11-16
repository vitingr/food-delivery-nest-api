declare abstract class CategoryRepository {
    abstract create(restaurant: string, categoryName: string, categoryDescription: string): Promise<void>;
    abstract get(restaurant: string): Promise<void>;
    abstract remove(id: string): Promise<void>;
    abstract update(id: string, restaurant: string, categoryName: string, categoryDescription: string, quantityItems: number): Promise<void>;
}
export default CategoryRepository;
