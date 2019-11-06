import { sum, sub, mult, divide } from "./operators";

test("adds 1 + 2 to equal 3", function() {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("subtracts 3 - 2 to equal 1", function() {
  const result = sub(3, 2);
  expect(result).toBe(1);
});

test("multiplies 2 * 3 to equal 6", function() {
  const result = mult(2, 3);
  expect(result), toBe(6);
});

test("divides 5 / 2 to equal 2.5", function() {
  const result = divide(5, 2);
  expect(result), toBe(2.5);
});
