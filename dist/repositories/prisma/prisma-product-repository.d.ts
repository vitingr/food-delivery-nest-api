import ProductRepository from "../product-repository";
import { PrismaService } from "src/database/prisma.service";
export declare class PrismaProductRepository implements ProductRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(restaurant: string, category: string, productName: string, productDescription: string, productValue: number, productFoto: string): Promise<void>;
    get(restaurant: string): Promise<any>;
    remove(id: string): Promise<any>;
    update(id: string, productName: string, productDescription: string, productValue: number, productFoto: string): Promise<any>;
    getRestaurantProducts(productsIds: string): Promise<any>;
    getAllProducts(): Promise<any>;
    favoriteProduct(id: string, productId: string): Promise<void>;
    removeFavorite(id: string, productId: string): Promise<void>;
}
