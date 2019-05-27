import map from '../exercises-answers/3';

test("Mapping number's array by square function", () => {
  const array = [1, 2, 3, 4, 5];
  const expected = [1, 4, 9, 16, 25];

  expect(map(number => number ** 2, array)).toEqual(expected);
  expect(array).toEqual([1, 2, 3, 4, 5]);
});

test('Mapping empty array', () => {
  const emptyArray = [];
  const result = map(number => number ** 2, emptyArray);

  expect(result).toEqual([]);
  expect(result === emptyArray).toBeFalsy();
});
