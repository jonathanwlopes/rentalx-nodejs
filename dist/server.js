"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerSetup_json_1 = __importDefault(require("./swaggerSetup.json"));
const routes_1 = require("./routes");
const PORT = 3333;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSetup_json_1.default));
app.use(routes_1.router);
app.listen(PORT, () => console.log("Server is running..."));
//# sourceMappingURL=server.js.map