import { CategoryRepository } from "../../repositories/implementations/CategoriesRespository";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    execute(): CategoryRepository {
        const categories = this.categoryRepository.list();

        return categories;
    }
}

export { ListCategoryUseCase };
