import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("shoud transfrom a string number to number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");
});

it("should yield NaN for non-transformable value", () => {
  const input = "invalid";

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});
