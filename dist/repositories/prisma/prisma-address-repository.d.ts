import AddressRepository from "../address-repository";
import { PrismaService } from "src/database/prisma.service";
export declare class PrismaAddressRepository implements AddressRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(user: string, state: string, city: string, street: string, address: number): Promise<void>;
    getAddressById(addressId: string): Promise<any>;
    get(userId: string): Promise<any>;
    getAllAddress(): Promise<any>;
}
