import { Router } from "express"
import { createCategoryController } from "../modules/cars/useCases/createCategory"
import { listCategoryController } from "../modules/cars/useCases/listCategories"

export const categoriesRoutes = Router()

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/list", (request, response) => {
  return listCategoryController.handle(request, response)
})
