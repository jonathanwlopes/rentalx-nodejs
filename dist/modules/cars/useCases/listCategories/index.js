"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCategoryController = void 0;
const CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
const ListCategoriesController_1 = require("./ListCategoriesController");
const ListCategoriesUseCase_1 = require("./ListCategoriesUseCase");
const categoryRepository = CategoriesRepository_1.CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase_1.ListCategoriesUseCase(categoryRepository);
exports.listCategoryController = new ListCategoriesController_1.ListCategoriesController(listCategoriesUseCase);
//# sourceMappingURL=index.js.map