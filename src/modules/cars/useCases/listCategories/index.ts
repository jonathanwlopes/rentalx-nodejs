import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository"
import { ListCategoriesController } from "./ListCategoriesController"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"

const categoryRepository = null

const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)

export const listCategoryController = new ListCategoriesController(listCategoriesUseCase)
