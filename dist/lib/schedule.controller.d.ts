import { createSchedule, removeSchedule } from 'src/dtos/schedule';
import ScheduleRepository from 'src/repositories/schedule-repository';
export declare class ScheduleController {
    private scheduleRepository;
    constructor(scheduleRepository: ScheduleRepository);
    createSchedule(body: createSchedule): Promise<void>;
    removeSchedule(body: removeSchedule): Promise<void>;
    getSchedulesByUserId(userId: string): Promise<string>;
}
