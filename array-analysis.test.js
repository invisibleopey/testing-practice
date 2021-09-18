import { analyze } from './array-analysis';

test('Test Length and Average', () => {
  const object = analyze([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({ length: 6, average: 4 });
});
