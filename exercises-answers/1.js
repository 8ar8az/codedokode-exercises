export default (start = 0, step = 1) => {
  let currentValue = start;

  return () => {
    const value = currentValue;
    currentValue += step;

    return value;
  };
};
