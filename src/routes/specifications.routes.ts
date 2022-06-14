import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController"

const createSpecificationController = new CreateSpecificationController()

export const specificationsRoutes = Router()
specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", createSpecificationController.handle)
