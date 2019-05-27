import sequence from '../exercises-answers/1';
import take from '../exercises-answers/2';

test('Execute (take) generator function for 10 times', () => {
  const expected = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];

  const generator = sequence(0, 5);
  const result = take(generator, 10);

  expect(result).toEqual(expected);
});

test('Execute (take) generator function for 0 times', () => {
  const generator = sequence();

  expect(take(generator, 0)).toEqual([]);
});
