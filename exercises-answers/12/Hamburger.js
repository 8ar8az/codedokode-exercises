import _ from 'lodash';
import HamburgerException from './HamburgerException';

function Hamburger(size, stuffing) {
  const sizes = new Set(_.values(Hamburger.SIZES));
  const stuffings = new Set(_.values(Hamburger.STUFFING));

  if (!sizes.has(size)) {
    throw new HamburgerException('Invalid size of hamburger');
  }

  if (!stuffings.has(stuffing)) {
    throw new HamburgerException('Invalid stuffing for hamburger');
  }

  this.size = size;
  this.stuffing = stuffing;
  this.toppings = new Set();
}

Hamburger.SIZES = {
  SMALL: { price: 50, calories: 20 },
  LARGE: { price: 100, calories: 40 },
};
Hamburger.STUFFING = {
  CHEESE: { price: 10, calories: 20 },
  SALAD: { price: 20, calories: 5 },
  POTATO: { price: 15, calories: 10 },
};
Hamburger.TOPPING = {
  MAYO: { price: 20, calories: 5 },
  SPICE: { price: 15, calories: 0 },
};

Hamburger.prototype.addTopping = function addTopping(topping) {
  const availableToppings = new Set(_.values(Hamburger.TOPPING));

  if (!availableToppings.has(topping)) {
    throw new HamburgerException('Invalid topping for hamburger');
  }

  if (this.toppings.has(topping)) {
    throw new HamburgerException('This topping has already added to hamburger');
  }

  this.toppings.add(topping);
  return true;
};

Hamburger.prototype.removeTopping = function removeTopping(topping) {
  const availableToppings = new Set(_.values(Hamburger.TOPPING));

  if (!availableToppings.has(topping)) {
    throw new HamburgerException('Invalid topping for hamburger');
  }

  if (!this.toppings.has(topping)) {
    throw new HamburgerException("You can't remove topping that hasn't added to hamburger yet");
  }

  this.toppings.delete(topping);
  return true;
};

Hamburger.prototype.getToppings = function getToppings() {
  return Array.from(this.toppings);
};

Hamburger.prototype.getSize = function getSize() {
  return this.size;
};

Hamburger.prototype.getStuffing = function getStuffing() {
  return this.stuffing;
};

Hamburger.prototype.calculatePrice = function calculatePrice() {
  return _.reduce(
    Array.from(this.toppings),
    (acc, topping) => acc + topping.price,
    this.size.price + this.stuffing.price,
  );
};

Hamburger.prototype.calculateCalories = function calculateCalories() {
  return _.reduce(
    Array.from(this.toppings),
    (acc, topping) => acc + topping.calories,
    this.size.calories + this.stuffing.calories,
  );
};

export default Hamburger;
