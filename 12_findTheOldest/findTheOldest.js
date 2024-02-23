const findTheOldest = function (people) {
  return people.reduce((oldest, cur) => {
    const currentAge = cur.yearOfDeath
      ? cur.yearOfDeath - cur.yearOfBirth
      : new Date().getFullYear() - cur.yearOfBirth;

    const oldestAge = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : new Date().getFullYear() - oldest.yearOfBirth;

    return currentAge > oldestAge ? cur : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
