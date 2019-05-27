import _ from 'lodash';

export default (objects, prop) => _.map(objects, obj => obj[prop]);
