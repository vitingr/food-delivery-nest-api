import { PrismaService } from "src/database/prisma.service";
import DayItemRepository from "../day-item-repository";
export declare class PrismaDayItemRepository implements DayItemRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, day: string, restaurant: string, restaurantName: string, productId: string, productFoto: string, quantityItems: number, totalValue: number, deliveryHour: number, productName: string): Promise<void>;
    remove(dayItemId: string): Promise<void>;
    get(userId: string): Promise<any>;
}
