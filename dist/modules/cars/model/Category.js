"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const uuid_1 = require("uuid");
class Category {
    constructor(id) {
        if (!id) {
            this.id = (0, uuid_1.v4)();
        }
    }
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map