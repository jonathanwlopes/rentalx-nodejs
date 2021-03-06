import express, { NextFunction, Request, response, Response } from "express"
import "express-async-errors"
import swaggerUi from "swagger-ui-express"
import swaggerSetup from "./swaggerSetup.json"
import "./database"
import "./shared/container"

import { router } from "./routes"
import { AppError } from "./errors/AppError"

const PORT = 3333

const app = express()

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup))

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  return res.status(500).json({ status: "error", message: `Internal server error: ${err.message}` })
})

app.listen(PORT, () => console.log("Server is running..."))
