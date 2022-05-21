import { CategoriesRepository } from "../../repositories/CategoriesRepository"
import { ListCategoriesController } from "./ListCategoriesController"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"

const categoryRepository = CategoriesRepository.getInstance()

const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)

export const listCategoryController = new ListCategoriesController(listCategoriesUseCase)
