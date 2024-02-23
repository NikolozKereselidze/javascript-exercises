const getTheTitles = function (books) {
  let array = [];
  books.map(({ title, author }) => {
    array.push(title);
  });
  return array;
};

// Do not edit below this line
module.exports = getTheTitles;
