"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateCategoryController_1 = require("../modules/cars/useCases/createCategory/CreateCategoryController");
const ImportCategoryController_1 = require("../modules/cars/useCases/importCategory/ImportCategoryController");
const ListCategoriesController_1 = require("../modules/cars/useCases/listCategories/ListCategoriesController");
const upload = (0, multer_1.default)({
    dest: "./tmp",
});
const createCategoryController = new CreateCategoryController_1.CreateCategoryController();
const listCategoryController = new ListCategoriesController_1.ListCategoriesController();
const importCategoryController = new ImportCategoryController_1.ImportCategoryController();
exports.categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes.post("/", createCategoryController.handle);
exports.categoriesRoutes.get("/list", listCategoryController.handle);
exports.categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);
//# sourceMappingURL=categories.routes.js.map