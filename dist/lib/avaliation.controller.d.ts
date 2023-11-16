import { createAvaliation, removeRestaurantAvaliation } from 'src/dtos/avaliation';
import AvaliationRepository from 'src/repositories/avaliation-repository';
export declare class AvaliationController {
    private avaliationRepository;
    constructor(avaliationRepository: AvaliationRepository);
    createAvaliation(body: createAvaliation): Promise<void>;
    getRestaurantAvaliations(restaurantId: string): Promise<string>;
    removeAvaliation(body: removeRestaurantAvaliation): Promise<void>;
}
