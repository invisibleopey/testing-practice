import reverseString from './reverse-string';

test('Reverse strings', () => {
  expect(reverseString('boy')).toBe('yob');
});

test('Reverse strings', () => {
  expect(reverseString('girl')).toBe('lrig');
});

test('Reverse strings', () => {
  expect(reverseString('Jah Bless')).toBe('sselB haJ');
});
