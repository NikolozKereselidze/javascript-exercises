const sumAll = function (num1, num2) {
  let sum = 0;
  let min;
  let max;

  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  } else if (num1 >= num2) {
    min = num2;
    max = num1;
  } else {
    min = num1;
    max = num2;
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
