import express from "express"
import swaggerUi from "swagger-ui-express"
import swaggerSetup from "./swaggerSetup.json"
import "./database"
import "./shared/container"

import { router } from "./routes"

const PORT = 3333

const app = express()

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup))

app.use(router)

app.listen(PORT, () => console.log("Server is running..."))
