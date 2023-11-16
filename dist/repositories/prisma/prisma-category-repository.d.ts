import CategoryRepository from "../category-repository";
import { PrismaService } from "src/database/prisma.service";
export declare class PrismaCategoryRepository implements CategoryRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(restaurant: string, categoryName: string, categoryDescription: string): Promise<void>;
    get(restaurant: string): Promise<any>;
    remove(id: string): Promise<void>;
    update(id: string, restaurant: string, categoryName: string, categoryDescription: string, quantityItems: number): Promise<void>;
}
