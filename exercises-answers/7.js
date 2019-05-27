export default (fn, ctx) => (...args) => fn.apply(ctx, args);
