const cities = [
  {
    city: 'Manila',
    population: 24650000,
  },
  {
    city: 'Shenzhen',
    population: 23300000,
  },
  {
    city: 'Beijing',
    population: 24900000,
  },
  {
    city: 'Mexico City',
    population: 21650668,
  },
  {
    city: 'Guangzhou',
    population: 25000000,
  },
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

export default (num) => {
  const sortingFn = (a, b) => {
    if (a.population < b.population) {
      return 1;
    }

    return -1;
  };

  return cities.sort(sortingFn).slice(0, num);
};
