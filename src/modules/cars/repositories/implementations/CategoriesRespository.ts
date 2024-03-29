import { Repository, getRepository } from "typeorm";

import { Category } from "../../entities/Category";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    // public static getInstance() {
    //     if (!CategoryRepository.INSTANCE) {
    //         this.INSTANCE = new CategoryRepository();
    //     }
    //     return CategoryRepository.INSTANCE;
    // }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        });
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();

        return categories;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoryRepository };
