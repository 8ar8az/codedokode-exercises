import sequence from '../exercises-answers/1';

test('Default generator', () => {
  const generator = sequence();
  expect(generator()).toBe(0);
  expect(generator()).toBe(1);
});

test("Generator with user's settings", () => {
  const generator1 = sequence(1, 5);
  const generator2 = sequence(3, 3);

  expect(generator1()).toBe(1);
  expect(generator2()).toBe(3);
  expect(generator1()).toBe(6);
  expect(generator2()).toBe(6);
});
