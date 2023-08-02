import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    execute(): Category[] {
        const categories = this.categoryRepository.list();

        return categories;
    }
}

export { ListCategoryUseCase };
