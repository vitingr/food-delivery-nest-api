declare abstract class AvaliationRepository {
    abstract create(user: string, restaurant: string, restaurantName: string, username: string, stars: number, avaliationText: string, data: string): Promise<void>;
    abstract get(restaurantId: string): Promise<void>;
    abstract remove(id: string): Promise<void>;
}
export default AvaliationRepository;
