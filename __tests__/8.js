import pluck from '../exercises-answers/8';

test('Test pluck function', () => {
  const objects = [
    {
      name: 'Petya',
      age: 21,
      email: 'petro@yandex.ru',
    },
    {
      name: 'Vasiliy',
      age: 25,
    },
    {
      name: 'Alex',
      age: 23,
      email: 'alex@gmail.com',
    },
  ];

  const expected = ['petro@yandex.ru', undefined, 'alex@gmail.com'];

  expect(pluck(objects, 'email')).toEqual(expected);
});
