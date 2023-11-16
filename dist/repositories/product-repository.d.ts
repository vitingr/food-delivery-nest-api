declare abstract class ProductRepository {
    abstract create(restaurant: string, category: string, productName: string, productDescription: string, productValue: number, productFoto: string): Promise<void>;
    abstract get(restaurant: string): Promise<void>;
    abstract remove(id: string): Promise<void>;
    abstract update(id: string, productName: string, productDescription: string, productValue: number, productFoto: string): Promise<void>;
    abstract getRestaurantProducts(productsIds: string): Promise<void>;
    abstract getAllProducts(): Promise<void>;
    abstract favoriteProduct(id: string, productId: string): Promise<void>;
    abstract removeFavorite(id: string, productId: string): Promise<void>;
}
export default ProductRepository;
