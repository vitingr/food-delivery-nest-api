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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleController = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("../dtos/schedule");
const schedule_repository_1 = __importDefault(require("../repositories/schedule-repository"));
let ScheduleController = class ScheduleController {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    async createSchedule(body) {
        const { userId } = body;
        try {
            await this.scheduleRepository.create(userId);
        }
        catch (error) {
            console.log(error);
        }
    }
    async removeSchedule(body) {
        const { userId } = body;
        try {
            await this.scheduleRepository.remove(userId);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getSchedulesByUserId(userId) {
        try {
            const response = await this.scheduleRepository.get(userId);
            return JSON.stringify(response);
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.ScheduleController = ScheduleController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_1.createSchedule]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "createSchedule", null);
__decorate([
    (0, common_1.Post)('remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_1.removeSchedule]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "removeSchedule", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScheduleController.prototype, "getSchedulesByUserId", null);
exports.ScheduleController = ScheduleController = __decorate([
    (0, common_1.Controller)('schedule'),
    __metadata("design:paramtypes", [schedule_repository_1.default])
], ScheduleController);
//# sourceMappingURL=schedule.controller.js.map