import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/UseCases/CreateCategory";
import { listCategoryController } from "../modules/cars/UseCases/ListCategory";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", (request, response) => {
    createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    const { file } = request;
    console.log(file);
    return response.status(200).send();
});

export { categoriesRoutes };
