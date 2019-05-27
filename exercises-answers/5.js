export default (fn, ...args1) => (...args2) => fn(...args1, ...args2);
