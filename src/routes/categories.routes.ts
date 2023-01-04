import { Router } from "express";

import { CategoryRepository } from "../modules/cars/repositories/CategoriesRespository";
import { createCategoryController } from "../modules/cars/UseCases/CreateCategory";

const categoriesRoutes = Router();
const categoriesRespository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRespository.list();

    return response.json(all);
});

export { categoriesRoutes };
