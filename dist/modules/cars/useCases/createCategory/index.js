"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoryController = void 0;
const CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
const CreateCategoryController_1 = require("./CreateCategoryController");
const CreateCategoryUseCase_1 = require("./CreateCategoryUseCase");
const categoryRepository = CategoriesRepository_1.CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase_1.CreateCategoryUseCase(categoryRepository);
exports.createCategoryController = new CreateCategoryController_1.CreateCategoryController(createCategoryUseCase);
//# sourceMappingURL=index.js.map