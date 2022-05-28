"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesUseCase = void 0;
class ListCategoriesUseCase {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    execute() {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}
exports.ListCategoriesUseCase = ListCategoriesUseCase;
//# sourceMappingURL=ListCategoriesUseCase.js.map