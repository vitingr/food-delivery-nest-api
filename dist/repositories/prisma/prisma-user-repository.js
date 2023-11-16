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
exports.PrismaUserRepository = void 0;
const prisma_service_1 = require("../../database/prisma.service");
const common_1 = require("@nestjs/common");
let PrismaUserRepository = class PrismaUserRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(name, firstname, lastname, email, partner, money, photo) {
        await this.prisma.user.create({
            data: {
                name: name,
                firstname: firstname,
                lastname: lastname,
                email: email,
                partner: partner,
                money: money,
                photo: photo,
            }
        });
    }
    async get(email) {
        const result = await this.prisma.user.findUnique({
            where: {
                email: email
            }
        });
        return result;
    }
    async update(userId, name, firstname, lastname, photo, address) {
        await this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name: name,
                firstname: firstname,
                lastname: lastname,
                photo: photo,
                address: address
            }
        });
    }
    async viewNavbar(userId) {
        await this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                driverMenu: true
            }
        });
    }
    async viewRoutine(userId) {
        await this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                driverRoutine: true
            }
        });
    }
};
exports.PrismaUserRepository = PrismaUserRepository;
exports.PrismaUserRepository = PrismaUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaUserRepository);
//# sourceMappingURL=prisma-user-repository.js.map