import filter from '../exercises-answers/9';

test('Test filter function', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  const expected = [2, 4, 6, 8];

  expect(filter(arr, elem => (elem % 2) === 0)).toEqual(expected);
});
