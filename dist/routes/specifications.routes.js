"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
const express_1 = require("express");
const createSpecification_1 = require("../modules/cars/useCases/createSpecification");
exports.specificationsRoutes = (0, express_1.Router)();
exports.specificationsRoutes.post("/", (request, response) => {
    return createSpecification_1.createSpecificationController.handle(request, response);
});
//# sourceMappingURL=specifications.routes.js.map