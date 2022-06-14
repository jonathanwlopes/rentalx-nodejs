import { Router } from "express"
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController"

export const authenticateRoutes = Router()
const authenticateUseController = new AuthenticateUserController()

authenticateRoutes.post("/sessions", authenticateUseController.handle)
