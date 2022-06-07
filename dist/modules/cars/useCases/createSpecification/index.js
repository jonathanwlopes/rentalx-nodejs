"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSpecificationController = void 0;
const SpecificationsRepository_1 = require("../../repositories/implementations/SpecificationsRepository");
const CreateSpecificationController_1 = require("./CreateSpecificationController");
const CreateSpecificationUseCase_1 = require("./CreateSpecificationUseCase");
const specificationRepository = new SpecificationsRepository_1.SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase_1.CreateSpecificationUseCase(specificationRepository);
exports.createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController(createSpecificationUseCase);
//# sourceMappingURL=index.js.map