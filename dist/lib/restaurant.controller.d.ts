import { CreateRestaurant, updateRestaurant } from '../dtos/restaurant';
import RestaurantRepository from '../repositories/restaurant-repository';
export declare class RestaurantController {
    private restaurantRepository;
    constructor(restaurantRepository: RestaurantRepository);
    getRestaurants(): Promise<string>;
    getRestaurant(id: string): Promise<string>;
    createRestaurant(body: CreateRestaurant): Promise<void>;
    updateRestaurant(body: updateRestaurant): Promise<void>;
    findRestaurantBySpeciality(speciality: string): Promise<string>;
}
