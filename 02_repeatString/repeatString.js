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

const number = Math.floor(Math.random() * 1000);
repeatString("hey", number);

// Do not edit below this line
module.exports = repeatString;
