const fibonacci = function (num) {
  const number = parseInt(num);
  if (number < 1) return 'OOPS';

  if (number < 3) return 1;

  return fibonacci(number - 1) + fibonacci(number - 2);
};

// Do not edit below this line
module.exports = fibonacci;
