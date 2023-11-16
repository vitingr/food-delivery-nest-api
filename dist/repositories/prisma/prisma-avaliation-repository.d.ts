import { PrismaService } from "src/database/prisma.service";
import AvaliationRepository from "../avaliation-repository";
export declare class PrismaAvaliationRepository implements AvaliationRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(user: string, restaurant: string, restaurantName: string, username: string, stars: number, avaliationText: string, data: string): Promise<void>;
    get(restaurantId: string): Promise<any>;
    remove(id: string): Promise<void>;
}
