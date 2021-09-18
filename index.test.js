import { capitalize, reverseString, calculator } from './index';

// Capitalize(string)
test('Capitalizes first letter of string', () => {
  expect(capitalize('opeyemi')).toBe('Opeyemi');
});

test('Capitalizes first letter of string', () => {
  expect(capitalize('abdullahi')).toBe('Abdullahi');
});

test('Capitalizes first letter of string', () => {
  expect(capitalize('the boy is back.')).toBe('The boy is back.');
});

// reverseString(string)
test('Reverse strings', () => {
  expect(reverseString('boy')).toBe('yob');
});

test('Reverse strings', () => {
  expect(reverseString('girl')).toBe('lrig');
});

test('Reverse strings', () => {
  expect(reverseString('Jah Bless')).toBe('sselB haJ');
});

// Calculator Object
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
