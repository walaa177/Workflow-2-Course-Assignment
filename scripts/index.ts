import { createProduct } from "./helpers/objectHelpers";
import { product } from "./helpers/objectHelpers";

const newProduct:product = createProduct({id:12, code:"d f g", title:"This is the title of the product, it will be truncated"});

console.log(newProduct);