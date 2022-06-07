"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const createCategory_1 = require("../modules/cars/useCases/createCategory");
const importCategory_1 = require("../modules/cars/useCases/importCategory");
const listCategories_1 = require("../modules/cars/useCases/listCategories");
const upload = (0, multer_1.default)({
    dest: "./tmp",
});
exports.categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes.post("/", (request, response) => {
    return createCategory_1.createCategoryController.handle(request, response);
});
exports.categoriesRoutes.get("/list", (request, response) => {
    return listCategories_1.listCategoryController.handle(request, response);
});
exports.categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategory_1.importCategoryController.handle(request, response);
});
//# sourceMappingURL=categories.routes.js.map