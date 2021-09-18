import { capitalize, reverseString } from './index';

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
