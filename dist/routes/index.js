"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const categories_routes_1 = require("./categories.routes");
const specifications_routes_1 = require("./specifications.routes");
exports.router = (0, express_1.Router)();
exports.router.use("/categories", categories_routes_1.categoriesRoutes);
exports.router.use("/specifications", specifications_routes_1.specificationsRoutes);
//# sourceMappingURL=index.js.map