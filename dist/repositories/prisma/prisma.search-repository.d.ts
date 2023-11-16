import searchRepository from "../search-repository";
import { PrismaService } from "src/database/prisma.service";
export declare class prismaSearchRepository implements searchRepository {
    private prisma;
    constructor(prisma: PrismaService);
    search(text: string): Promise<any>;
}
