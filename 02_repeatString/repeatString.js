const repeatString = function (string, num) {
  let str = "";
  if (num < 0) {
    return "ERROR";
  }
  while (num > 0) {
    str += string;
    num--;
  }
  return str;
};

repeatString("hey", -1);

// Do not edit below this line
module.exports = repeatString;
