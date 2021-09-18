import { caesarCipher } from './caesar-cipher';

test('5 letters with key 1', () => {
  expect(caesarCipher('abcde', 1)).toBe('bcdef');
});

test('4 letters with key 1', () => {
  expect(caesarCipher('abcd', 1)).toBe('bcde');
});
