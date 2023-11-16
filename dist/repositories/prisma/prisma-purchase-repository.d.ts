import { PrismaService } from "src/database/prisma.service";
import PurchaseRepository from "../purchase-repository";
export declare class PrismaPurchaseRepository implements PurchaseRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(user: string, restaurant: string, products: string, quantity: number, totalValue: number, commentaries: string, paymentMethod: string, takeOption: string, deliveryAddress: string, deliveryPlace: string, restaurantLogo: string, restaurantName: string, deliveryTime: string, deliveryValue: number, delivered: boolean): Promise<void>;
    get(userId: string): Promise<any>;
    removePurchase(purchaseId: string): Promise<void>;
    getRestaurantPurchases(restaurantId: string): Promise<any>;
}
