"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaRestaurantRepository = void 0;
const prisma_service_1 = require("../../database/prisma.service");
const common_1 = require("@nestjs/common");
let PrismaRestaurantRepository = class PrismaRestaurantRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(ownerId, email, cellphone, ownerName, ownerLastname, cpf, rg, orgaoEmissor, cnpj, restaurantName, telephone, street, city, state, address, speciality, delivery, creatorEmail) {
        const response = await this.prisma.restaurant.create({
            data: {
                ownerId: ownerId,
                email: email,
                cellphone: cellphone,
                ownerName: ownerName,
                ownerLastname: ownerLastname,
                cpf: cpf,
                rg: rg,
                orgaoEmissor: orgaoEmissor,
                cnpj: cnpj,
                restaurantName: restaurantName,
                telephone: telephone,
                street: street,
                city: city,
                state: state,
                address: address,
                speciality: speciality,
                delivery: delivery
            }
        });
        await this.prisma.user.update({
            where: {
                email: creatorEmail
            },
            data: {
                partner: true,
                restaurantId: response.id
            }
        });
    }
    async get(id) {
        const response = await this.prisma.restaurant.findUnique({
            where: {
                id: id
            }
        });
        return response;
    }
    async getAllRestaurants() {
        const response = await this.prisma.restaurant.findMany();
        return response;
    }
    async updateRestaurant(id, ownerId, cellphone, ownerName, ownerLastname, restaurantName, telephone, street, city, state, address, speciality, delivery, logo, background, deliveryTime, deliveryValue, minValue, openingHour, closingHour) {
        await this.prisma.restaurant.update({
            where: {
                id: id
            },
            data: {
                ownerId: ownerId,
                cellphone: cellphone,
                ownerName: ownerName,
                ownerLastname: ownerLastname,
                restaurantName: restaurantName,
                telephone: telephone,
                street: street,
                city: city,
                state: state,
                address: address,
                speciality: speciality,
                delivery: delivery,
                logo: logo,
                background: background,
                deliveryTime: deliveryTime,
                deliveryValue: deliveryValue,
                minValue: minValue,
                openingHour: openingHour,
                closingHour: closingHour
            }
        });
    }
    async findRestaurantBySpeciality(speciality) {
        return await this.prisma.restaurant.findMany({
            where: {
                speciality: speciality
            }
        });
    }
};
exports.PrismaRestaurantRepository = PrismaRestaurantRepository;
exports.PrismaRestaurantRepository = PrismaRestaurantRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaRestaurantRepository);
//# sourceMappingURL=prisma-restaurant-repository.js.map