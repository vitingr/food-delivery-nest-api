import { createDayItem, removeDayItem } from 'src/dtos/dayItem';
import DayItemRepository from 'src/repositories/day-item-repository';
export declare class DayitemController {
    private dayItemRepository;
    constructor(dayItemRepository: DayItemRepository);
    createDayItem(body: createDayItem): Promise<void>;
    removeDayItem(body: removeDayItem): Promise<void>;
    getDayItemsByUserId(userId: string): Promise<string>;
}
