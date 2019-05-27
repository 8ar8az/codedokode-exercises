import getCitiesWithBigPopulation from '../exercises-answers/11';

test('Get 5 more populating cities', () => {
  const cities = getCitiesWithBigPopulation(5);
  const expected = [
    {
      city: 'Tokyo',
      population: 37832892,
    },
    {
      city: 'Shanghai',
      population: 34865252,
    },
    {
      city: 'Jakarta',
      population: 31689592,
    },
    {
      city: 'Delhi',
      population: 26454000,
    },
    {
      city: 'Seoul',
      population: 25514000,
    },
  ];

  expect(cities).toEqual(expected);
  expect(getCitiesWithBigPopulation(3)).toEqual(cities.slice(0, 3));
});
