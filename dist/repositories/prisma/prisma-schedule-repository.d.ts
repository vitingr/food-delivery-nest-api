import { PrismaService } from "src/database/prisma.service";
import ScheduleRepository from "../schedule-repository";
export declare class PrismaScheduleRepository implements ScheduleRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string): Promise<void>;
    remove(userId: string): Promise<void>;
    get(userId: string): Promise<any>;
}
