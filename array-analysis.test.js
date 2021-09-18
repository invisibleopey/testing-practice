import { analyze } from './array-analysis';

test('Test length', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({ length: 6 });
});

test('Test length', () => {
  const object = analyze([1, 8, 3, 4, 2]);
  expect(object).toEqual({ length: 5 });
});
