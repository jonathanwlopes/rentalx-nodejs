"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationsRepository = void 0;
const Specification_1 = require("../../model/Specification");
class SpecificationsRepository {
    constructor() {
        this.specifications = [];
    }
    create({ name, description }) {
        const specification = new Specification_1.Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specification);
    }
    findByName(name) {
        const specification = this.specifications.find((specification) => specification.name === name);
        return specification;
    }
}
exports.SpecificationsRepository = SpecificationsRepository;
//# sourceMappingURL=SpecificationsRepository.js.map