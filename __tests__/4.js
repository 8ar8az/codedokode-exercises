import fmap from '../exercises-answers/4';
import sequence from '../exercises-answers/1';
import take from '../exercises-answers/2';

test('Mapping generator', () => {
  const generator = sequence(0, 3);
  const mapFn = num => num + 2;

  const newGenerator = fmap(mapFn, generator);

  expect(take(newGenerator, 5)).toEqual([2, 5, 8, 11, 14]);
});

test('Mapping function with three arguments', () => {
  const fn = (a, b, c) => a + b + c;
  const mapFn = num => num * 2;

  const newFn = fmap(mapFn, fn);

  expect(newFn(2, 3, 5)).toBe(20);
});
