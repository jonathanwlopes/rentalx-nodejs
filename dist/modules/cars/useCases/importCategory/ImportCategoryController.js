"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportCategoryController = void 0;
class ImportCategoryController {
    constructor(importCategoryUseCase) {
        this.importCategoryUseCase = importCategoryUseCase;
    }
    handle(request, response) {
        const { file } = request;
        this.importCategoryUseCase.execute(file);
        return response.status(201).send();
    }
}
exports.ImportCategoryController = ImportCategoryController;
//# sourceMappingURL=ImportCategoryController.js.map