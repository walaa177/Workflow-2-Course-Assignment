"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectHelpers_1 = require("./helpers/objectHelpers");
var newProduct = objectHelpers_1.createProduct({ id: 12, code: "d f g", title: "This is the title of the product, it will be truncated" });
console.log(newProduct);
