"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationUseCase = void 0;
class CreateSpecificationUseCase {
    constructor(specificationRepository) {
        this.specificationRepository = specificationRepository;
    }
    execute({ name, description }) {
        const specificationAlreadyExists = this.specificationRepository.findByName(name);
        if (specificationAlreadyExists)
            throw new Error("Specification already exists!");
        this.specificationRepository.create({ name, description });
    }
}
exports.CreateSpecificationUseCase = CreateSpecificationUseCase;
//# sourceMappingURL=CreateSpecificationUseCase.js.map