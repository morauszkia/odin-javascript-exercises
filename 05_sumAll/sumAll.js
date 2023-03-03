const sumAll = function (num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    num1 < 0 ||
    num2 < 0
  )
    return 'ERROR';

  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  let sum = 0;

  for (let num = start; num <= end; num++) {
    sum += num;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
