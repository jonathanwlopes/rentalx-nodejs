"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
(0, typeorm_1.getConnectionOptions)().then((options) => {
    const newOptions = options;
    newOptions.host = "dbcars";
    (0, typeorm_1.createConnection)(Object.assign({}, options));
});
//# sourceMappingURL=index.js.map