import { Router } from "express"
import multer from "multer"

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController"
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController"
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController"
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController"

const upload = multer({
  dest: "./tmp",
})

const createCategoryController = new CreateCategoryController()
const listCategoryController = new ListCategoriesController()
const importCategoryController = new ImportCategoryController()

export const categoriesRoutes = Router()

categoriesRoutes.post("/", createCategoryController.handle)
categoriesRoutes.get("/list", listCategoryController.handle)
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle)
