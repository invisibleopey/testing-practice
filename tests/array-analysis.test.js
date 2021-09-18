import { analyze } from '../scripts/array-analysis';

test('Test value of length', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object.length).toBe(6);
});

test('Test value of min', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object.min).toBe(1);
});

test('Test value of max', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object.max).toBe(8);
});

test('Test value of Average', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object.average).toBe(4);
});

test('Test Length, min, max and Average', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({ length: 6, average: 4, min: 1, max: 8 });
});
