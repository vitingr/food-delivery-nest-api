import ProductRepository from '../repositories/product-repository';
import { CreateProduct, favoriteProduct, removeFavorite, removeProduct, updateProduct } from '../dtos/product';
export declare class ProductController {
    private productRepository;
    constructor(productRepository: ProductRepository);
    getAllProducts(): Promise<string>;
    getProducts(restaurant: string): Promise<string>;
    createProduct(body: CreateProduct): Promise<void>;
    removeProduct(body: removeProduct): Promise<void>;
    updateProduct(body: updateProduct): Promise<void>;
    getAllRestaurantProducts(productsIds: string): Promise<string>;
    favoriteProduct(body: favoriteProduct): Promise<void>;
    removeFavoriteProduct(body: removeFavorite): Promise<void>;
}
