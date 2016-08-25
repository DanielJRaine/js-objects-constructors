'use strict';
const usePower = function () {
  return this._power;
};

// don't type function inside a constructor functions
const Hero = function Hero(name, alias, power) {
  this.name = name;
  this.alias = alias;
  this._power = power;
  this.usePower = usePower; //referenced, not defined here
};

// cannot use 'return' in a constructor function
let silverSurfer = new Hero('Norrin Radd',
                            'Silver Surfer',
                            'Manipulate four fundamental forces');

console.log(silverSurfer.usePower());
module.exports = Hero;
