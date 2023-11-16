import { PrismaService } from "src/database/prisma.service";
import RestaurantRepository from '../restaurant-repository';
export declare class PrismaRestaurantRepository implements RestaurantRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(ownerId: string, email: string, cellphone: string, ownerName: string, ownerLastname: string, cpf: string, rg: string, orgaoEmissor: string, cnpj: string, restaurantName: string, telephone: string, street: string, city: string, state: string, address: number, speciality: string, delivery: string, creatorEmail: string): Promise<void>;
    get(id: string): Promise<any>;
    getAllRestaurants(): Promise<any>;
    updateRestaurant(id: string, ownerId: string, cellphone: string, ownerName: string, ownerLastname: string, restaurantName: string, telephone: string, street: string, city: string, state: string, address: number, speciality: string, delivery: string, logo: string, background: string, deliveryTime: string, deliveryValue: number, minValue: number, openingHour: number, closingHour: number): Promise<void>;
    findRestaurantBySpeciality(speciality: string): Promise<any>;
}
