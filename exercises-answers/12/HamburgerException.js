import _ from 'lodash';

function HamburgerException(message) {
  Error.call(this, message);

  this.name = this.constructor.name;
  this.stack = Error.captureStackTrace(this, this.constructor);
}

HamburgerException.prototype = _.create(Error.prototype, { constructor: HamburgerException });

export default HamburgerException;
