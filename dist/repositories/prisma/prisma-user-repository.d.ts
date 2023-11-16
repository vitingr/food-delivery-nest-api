import { PrismaService } from "src/database/prisma.service";
import UserRepository from "../user-repository";
import { userInfo } from "src/types";
export declare class PrismaUserRepository implements UserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(name: string, firstname: string, lastname: string, email: string, partner: boolean, money: number, photo: string): Promise<void>;
    get(email: string): Promise<userInfo | any>;
    update(userId: string, name: string, firstname: string, lastname: string, photo: string, address: string): Promise<void>;
    viewNavbar(userId: string): Promise<void>;
    viewRoutine(userId: string): Promise<void>;
}
