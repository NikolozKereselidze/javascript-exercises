const reverseString = function (str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
