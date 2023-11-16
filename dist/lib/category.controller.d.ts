import CategoryRepository from '../repositories/category-repository';
import { CreateCategory, removeCategory, updateCategory } from '../dtos/category';
export declare class CategoryController {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    getCategories(restaurant: string): Promise<string>;
    createCategory(body: CreateCategory): Promise<void>;
    removeCategory(body: removeCategory): Promise<void>;
    updateCategories(body: updateCategory): Promise<void>;
}
