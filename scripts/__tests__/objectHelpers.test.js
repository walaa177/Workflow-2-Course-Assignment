import { createProduct } from "../helpers/objectHelpers";

test("create new product", function () {
  expect(
    createProduct({ id: 1, code: "new", title: "new product item" })
  ).toMatchObject({
    id: 1,
    code: "NEW",
    title: "new_product_",
  });
});
