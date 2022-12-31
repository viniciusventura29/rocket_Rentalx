interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    findByName(name: string);
    list();
    create({ name, description }: ICreateCategoryDTO);
}

export { ICategoryRepository, ICreateCategoryDTO };
