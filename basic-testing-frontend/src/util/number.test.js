import { expect, it, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber", () => {
  it("shoud transfrom a string number to number of type number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });

  it("should yield NaN for non-transformable value", () => {
    const input = "invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers", () => {
  it("should return an array of number values if an array of string number values is provied", () => {
    const numbers = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numbers);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numbers = ["", 1];
    const cleanFn = () => cleanNumbers(numbers);

    expect(cleanFn).toThrow();
  });
});
