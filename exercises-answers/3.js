import _ from 'lodash';

const map = (fn, arr) => {
  if (_.isEmpty(arr)) {
    return [];
  }

  return [fn(arr[0])].concat(map(fn, arr.slice(1)));
};

export default map;
