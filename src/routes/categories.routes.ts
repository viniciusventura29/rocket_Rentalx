import { Router } from "express";

import { createCategoryController } from "../modules/cars/UseCases/CreateCategory";
import { listCategoryController } from "../modules/cars/UseCases/ListCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    listCategoryController.handle(request, response);
});

export { categoriesRoutes };
