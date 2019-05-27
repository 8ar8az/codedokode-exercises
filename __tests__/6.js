import partialAny from '../exercises-answers/6';

test('Partial any for function with four arguments', () => {
  const fn = (a, b, c, d) => (a - b + c) * d;
  const partialFn = partialAny(fn, 4, undefined, 3);

  expect(partialFn(3, 2)).toBe(8);
});

test('Partial for function with four arguments, but give to it more arguments', () => {
  const fn = (a, b, c, d) => (a - b + c) * d;
  const partialFn = partialAny(fn, 4, undefined, 3);

  expect(partialFn(3, 2, 4, 5, 6)).toBe(8);
});

test('Partial for function with four arguments, but give to it less arguments', () => {
  const fn = (a, b, c, d) => (a - b + c) * d;
  const partialFn = partialAny(fn, 4, undefined, 3);

  expect(partialFn(3)).toBeNaN();
});
