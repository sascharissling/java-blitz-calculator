import { sum, sub, mult, divide, countDigits } from "./operators";

test("adds 1 + 2 to equal 3", function() {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("subtracts 3 - 2 to equal 1", function() {
  const result = sub(3, 2);
  expect(result).toBe(1);
});

test("multiplies 2 * 2 to equal 4", function() {
  const result = mult(2, 2);
  expect(result).toBe(4);
});

test("divides 2 / 2 to equal 1", function() {
  const result = divide(2, 2);
  expect(result).toBe(1);
});

test("count digits of 213", function() {
  const result = countDigits(231);
  expect(result).toBe(3);
});

test("count digits of 3129832", function() {
  const result = countDigits(3129832);
  expect(result).toBe(7);
});

test("count digits of -213", function() {
  const result = countDigits(-231);
  expect(result).toBe(4);
});

test("count digits of 0", function() {
  const result = countDigits(0);
  expect(result).toBe(1);
});
