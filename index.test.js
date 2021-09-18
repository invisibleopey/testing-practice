import capitalize from './index';
test('Capitalizes first letter of string', () => {
  expect(capitalize('opeyemi')).toBe('Opeyemi');
});

test('Capitalizes first letter of string', () => {
  expect(capitalize('abdullahi')).toBe('Abdullahi');
});

test('Capitalizes first letter of string', () => {
  expect(capitalize('the boy is back.')).toBe('The boy is back.');
});
