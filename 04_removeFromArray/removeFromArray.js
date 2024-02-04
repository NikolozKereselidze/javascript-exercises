const removeFromArray = function (arr, ...arrNumber) {
  return arr.filter((x) => !arrNumber.includes(x));

  //   return array.filter((x) => !args.includes(x));
};

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
