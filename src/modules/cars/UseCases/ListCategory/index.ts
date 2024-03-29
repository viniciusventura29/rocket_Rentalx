import { CategoryRepository } from "../../repositories/implementations/CategoriesRespository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const listCategoryRepository = null;

const listCategoryUseCase = new ListCategoryUseCase(listCategoryRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
