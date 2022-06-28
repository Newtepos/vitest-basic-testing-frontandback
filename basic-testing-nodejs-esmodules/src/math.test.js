import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in array", () => {
  //Arrange
  const numbers = [1, 2, 3];

  //Act
  const result = add(numbers);

  //Assert
  const expectedResult = numbers.reduce(
    (preValue, curValue) => preValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield NaN if a least one invalid number is provide", () => {
  //Arrange
  const numbers = ["invalid", 1, 2];

  //Act
  const result = add(numbers);

  //Assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string value is provied", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (preValue, curValue) => preValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into function", () => {
  const resultFM = () => {
    add();
  };

  expect(resultFM).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple argument instead of an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
