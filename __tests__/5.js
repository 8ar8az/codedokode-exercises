import partial from '../exercises-answers/5';

test('Partial for function with four arguments', () => {
  const fn = (a, b, c, d) => (a - b + c) * d;
  const partialFn = partial(fn, 4, 2);

  expect(partialFn(3, 2)).toBe(10);
});

test('Partial for function with four arguments, but give to it more arguments', () => {
  const fn = (a, b, c, d) => (a - b + c) * d;
  const partialFn = partial(fn, 4, 2);

  expect(partialFn(3, 2, 3, 5, 6)).toBe(10);
});

test('Partial for function with four arguments, but give to it less arguments', () => {
  const fn = (a, b, c, d) => (a - b + c) * d;
  const partialFn = partial(fn, 4, 2);

  expect(partialFn(3)).toBeNaN();
});
