export default (mapFn, gen) => (...args) => mapFn(gen(...args));
