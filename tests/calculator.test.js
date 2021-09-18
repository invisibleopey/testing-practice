import calculator from '../scripts/calculator';

test('Add two numbers', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('Add two numbers', () => {
  expect(calculator.add('2', 2)).toBe(4);
});

test('Subtract two numbers', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test('Subtract two numbers', () => {
  expect(calculator.subtract(0, 2)).toBe(-2);
});

test('Division of two numbers', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('multiplication of two numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('multiplication of two numbers', () => {
  expect(calculator.multiply(2, 0)).toBe(0);
});
