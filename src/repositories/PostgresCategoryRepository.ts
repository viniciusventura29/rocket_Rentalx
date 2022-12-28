import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoryRepository implements ICategoryRepository {
    findByName(name: string) {
        console.log(name);
        return null;
    }
    list() {
        return null;
    }
    create({ name, description }: ICreateCategoryDTO) {
        console.log(name, description);
    }
}

export { PostgresCategoryRepository };
