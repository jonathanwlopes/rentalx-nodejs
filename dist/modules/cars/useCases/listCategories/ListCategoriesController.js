"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesController = void 0;
class ListCategoriesController {
    constructor(listCategoryUseCase) {
        this.listCategoryUseCase = listCategoryUseCase;
    }
    handle(request, response) {
        const categoryList = this.listCategoryUseCase.execute();
        return response.status(200).send(categoryList);
    }
}
exports.ListCategoriesController = ListCategoriesController;
//# sourceMappingURL=ListCategoriesController.js.map