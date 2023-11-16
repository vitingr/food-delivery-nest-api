import { CreatePurchase, removePurchase } from '../dtos/purchase';
import PurchaseRepository from '../repositories/purchase-repository';
export declare class PurchaseController {
    private purchaseRepository;
    constructor(purchaseRepository: PurchaseRepository);
    createPurchase(body: CreatePurchase): Promise<void>;
    removePurchase(body: removePurchase): Promise<void>;
    getPurchase(userId: string): Promise<string>;
    getRestaurantPurchases(restaurantId: string): Promise<string>;
}
