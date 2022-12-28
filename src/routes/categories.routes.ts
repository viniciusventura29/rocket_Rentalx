import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoriesRespository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRespository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRespository
    );

    createCategoryService.execute({ name, description });

    return response.status(201).json();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRespository.list();

    return response.json(all);
});

export { categoriesRoutes };
