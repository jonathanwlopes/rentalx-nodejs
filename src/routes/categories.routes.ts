import { Router } from "express"
import multer from "multer"

import { createCategoryController } from "../modules/cars/useCases/createCategory"
import { importCategoryController } from "../modules/cars/useCases/importCategory"
import { listCategoryController } from "../modules/cars/useCases/listCategories"

const upload = multer({
  dest: "./tmp",
})

export const categoriesRoutes = Router()

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/list", (request, response) => {
  return listCategoryController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response)
})
