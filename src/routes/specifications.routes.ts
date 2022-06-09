import { Router } from "express"
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController"

const createSpecificationController = new CreateSpecificationController()

export const specificationsRoutes = Router()

specificationsRoutes.post("/", createSpecificationController.handle)
