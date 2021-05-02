"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
var stringHelpers_1 = require("./stringHelpers");
function createProduct(_a) {
    var id = _a.id, code = _a.code, title = _a.title;
    return {
        id: id,
        code: stringHelpers_1.makeUppercase(code),
        title: stringHelpers_1.limitLength(12, stringHelpers_1.replaceSpaces(title)),
    };
}
exports.createProduct = createProduct;
