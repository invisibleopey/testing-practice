import { caesarCipher } from './caesar-cipher';

test('5 letters with key 1', () => {
  expect(caesarCipher('abcde', 1)).toBe('bcdef');
});

test('4 letters with key 1', () => {
  expect(caesarCipher('abcd', 1)).toBe('bcde');
});

test('Two words with a space', () => {
  expect(caesarCipher('abc def', 1)).toBe('bcd efg');
});

test('Two words with a space', () => {
  expect(caesarCipher('Abc DEF', 1)).toBe('Bcd EFG');
});

test('Punctuation', () => {
  expect(caesarCipher('Abc.', 1)).toBe('Bcd.');
});

test('More punctuation tests', () => {
  expect(caesarCipher('Abc!!!/?><Def', 1)).toBe('Bcd!!!/?><Efg');
});

test('Wrapping from the end', () => {
  expect(caesarCipher('YZ', 1)).toBe('ZA');
});

test('More Wrapping from the end', () => {
  expect(caesarCipher('XYZ', 5)).toBe('CDE');
});

test('5 letters with key -1', () => {
  expect(caesarCipher('bcdef', -1)).toBe('abcde');
});

test('Two words with a space with -1 key', () => {
  expect(caesarCipher('bcd efg', -1)).toBe('abc def');
});

test('Wrapping from the start', () => {
  expect(caesarCipher('A', -1)).toBe('Z');
});

test('More Wrapping from the start', () => {
  expect(caesarCipher('CDE', -5)).toBe('XYZ');
});
