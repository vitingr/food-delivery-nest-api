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
exports.PrismaAddressRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let PrismaAddressRepository = class PrismaAddressRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(user, state, city, street, address) {
        await this.prisma.address.create({
            data: {
                user: user,
                state: state,
                city: city,
                street: street,
                address: address,
            }
        });
    }
    async getAddressById(addressId) {
        return await this.prisma.address.findUnique({
            where: {
                id: addressId
            }
        });
    }
    async get(userId) {
        return await this.prisma.address.findMany({
            where: {
                user: userId
            }
        });
    }
    async getAllAddress() {
        return await this.prisma.address.findMany();
    }
};
exports.PrismaAddressRepository = PrismaAddressRepository;
exports.PrismaAddressRepository = PrismaAddressRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaAddressRepository);
//# sourceMappingURL=prisma-address-repository.js.map