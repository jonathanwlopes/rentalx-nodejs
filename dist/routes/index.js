"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const authenticate_routes_1 = require("./authenticate.routes");
const categories_routes_1 = require("./categories.routes");
const specifications_routes_1 = require("./specifications.routes");
const users_routes_1 = require("./users.routes");
exports.router = (0, express_1.Router)();
exports.router.use("/categories", categories_routes_1.categoriesRoutes);
exports.router.use("/specifications", specifications_routes_1.specificationsRoutes);
exports.router.use("/users", users_routes_1.usersRoutes);
exports.router.use(authenticate_routes_1.authenticateRoutes);
//# sourceMappingURL=index.js.map