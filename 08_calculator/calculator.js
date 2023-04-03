const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((sum, next) => sum + next, 0);
};

const multiply = function (arr) {
  return arr.reduce((prod, next) => prod * next, 1);
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (n) {
  if (n <= 1) return 1;
  else return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
