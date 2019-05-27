import _ from 'lodash';

export default (fn, ...args1) => (...args2) => {
  let currentIndex = 0;

  const args = _.map(args1, (arg) => {
    if (arg !== undefined) {
      return arg;
    }

    const index = currentIndex;
    currentIndex += 1;

    return args2[index];
  }).concat(args2.slice(currentIndex));

  return fn(...args);
};
