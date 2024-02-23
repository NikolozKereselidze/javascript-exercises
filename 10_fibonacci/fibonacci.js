const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (Number(num) === 0) return 0;

  let sum = 0;
  let num1 = 0;
  let num2 = 1;
  for (let i = 2; i <= num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
};

// Do not edit below this line
module.exports = fibonacci;
