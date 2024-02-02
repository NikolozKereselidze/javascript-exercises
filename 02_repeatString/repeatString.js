const repeatString = function (string, num) {
  let str = "";
  while (num > 0) {
    str += string;
    num--;
  }
  return str;
};

repeatString("hey", 0);

// Do not edit below this line
module.exports = repeatString;
