import Hamburger from '../exercises-answers/12/Hamburger';
import HamburgerException from '../exercises-answers/12/HamburgerException';

let hamburger;

beforeAll(() => {
  hamburger = new Hamburger(Hamburger.SIZES.SMALL, Hamburger.STUFFING.SALAD);
  hamburger.addTopping(Hamburger.TOPPING.SPICE);
});

test("Test for hamburger's methods", () => {
  expect(hamburger.addTopping(Hamburger.TOPPING.MAYO)).toBeTruthy();
  expect(hamburger.getToppings()).toEqual([Hamburger.TOPPING.SPICE, Hamburger.TOPPING.MAYO]);

  expect(hamburger.removeTopping(Hamburger.TOPPING.MAYO)).toBeTruthy();
  expect(hamburger.getToppings()).toEqual([Hamburger.TOPPING.SPICE]);

  expect(hamburger.getSize()).toBe(Hamburger.SIZES.SMALL);
  expect(hamburger.getStuffing()).toBe(Hamburger.STUFFING.SALAD);
  expect(hamburger.calculatePrice()).toBe(85);
  expect(hamburger.calculateCalories()).toBe(25);
});

test('Attempt to add topping which has already added', () => {
  expect(() => {
    hamburger.addTopping(Hamburger.TOPPING.SPICE);
  }).toThrowError(HamburgerException);
});

test('Attempt to add wrong topping', () => {
  expect(() => {
    hamburger.addTopping({ price: 10, calories: 20 });
  }).toThrowError(HamburgerException);
});

test("Attempt to remove topping which hasn't added yet", () => {
  expect(() => {
    hamburger.removeTopping(Hamburger.TOPPING.MAYO);
  }).toThrowError(HamburgerException);
});

test('Attempt to remove wrong topping', () => {
  expect(() => {
    hamburger.removeTopping({ name: 'SPICE' });
  }).toThrowError(HamburgerException);
});

test('Attempt to create a hamburger with empty params', () => {
  expect(() => new Hamburger()).toThrowError(HamburgerException);
});

test('Attempt to create a hamburger with wrong params', () => {
  expect(() => new Hamburger(Hamburger.TOPPING.SPICE, Hamburger.TOPPING.SPICE))
    .toThrowError(HamburgerException);
});
