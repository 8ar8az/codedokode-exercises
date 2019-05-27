export default (generator, times) => {
  const result = [];

  for (let i = times; i > 0; i -= 1) {
    result.push(generator());
  }

  return result;
};
