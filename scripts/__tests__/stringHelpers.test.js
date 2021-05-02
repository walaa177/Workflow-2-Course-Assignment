import { TestScheduler } from "@jest/core";
import { replaceSpaces } from "../helpers/stringHelpers";
import { makeUppercase } from "../helpers/stringHelpers";
import { limitLength } from "../helpers/stringHelpers";

test("replace the space to under scrole", function () {
  expect(replaceSpaces("l olo")).toBe("l_olo");
});

test("conversion the word to UpperCase", function () {
  expect(makeUppercase("lolo").toUpperCase("LOLO"));
});

test("limit Length", function () {
  expect(limitLength(3, "lolozag")).toBe("lol");
});
