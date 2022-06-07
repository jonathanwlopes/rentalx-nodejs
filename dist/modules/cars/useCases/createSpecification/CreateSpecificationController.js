"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationController = void 0;
class CreateSpecificationController {
    constructor(createSpecificationUseCase) {
        this.createSpecificationUseCase = createSpecificationUseCase;
    }
    handle(request, response) {
        const { name, description } = request.body;
        this.createSpecificationUseCase.execute({ name, description });
        return response.status(201).send();
    }
}
exports.CreateSpecificationController = CreateSpecificationController;
//# sourceMappingURL=CreateSpecificationController.js.map