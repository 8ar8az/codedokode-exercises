import _ from 'lodash';

export default (arr, fn) => {
  if (_.isEmpty(arr)) {
    return [];
  }

  const iter = ([head, ...rest], acc) => {
    const newAcc = fn(head) ? [...acc, head] : acc;

    if (_.isEmpty(rest)) {
      return newAcc;
    }

    return iter(rest, newAcc);
  };

  return iter(arr, []);
};
