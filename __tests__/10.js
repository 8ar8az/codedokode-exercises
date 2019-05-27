import count from '../exercises-answers/10';

test('Test count function', () => {
  const obj1 = {
    name: 'Alex',
    age: 23,
    phone: '+79999999999',
    email: 'alex@gmail.com',
  };

  const obj2 = {
    name: 'Nick',
    age: 25,
    email: 'nick@gmail.com',
  };

  expect(count(obj1)).toBe(4);
  expect(count(obj2)).toBe(3);
});
