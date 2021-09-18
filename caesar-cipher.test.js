import { caesarCipher } from './caesar-cipher';

test('5 letters with key 1', () => {
  expect(caesarCipher.encrypt('abcde', 1)).toBe('bcdef');
});
