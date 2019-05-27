import bind from '../exercises-answers/7';

test('Test bind function with execute with object context and without it', () => {
  function workWithContext() {
    return this.x;
  }

  const obj1 = { x: 3, workWithContext };
  const obj2 = { x: 5, workWithContext: bind(workWithContext, obj1) };

  expect(obj1.workWithContext()).toBe(3);
  expect(obj2.workWithContext()).toBe(3);
});
