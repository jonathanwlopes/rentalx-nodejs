"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importCategoryController = void 0;
const CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
const ImportCategoryController_1 = require("./ImportCategoryController");
const ImportCategoryUseCase_1 = require("./ImportCategoryUseCase");
const categoriesRepository = CategoriesRepository_1.CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase_1.ImportCategoryUseCase(categoriesRepository);
exports.importCategoryController = new ImportCategoryController_1.ImportCategoryController(importCategoryUseCase);
//# sourceMappingURL=index.js.map