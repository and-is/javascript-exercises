const findTheOldest = function (str) {
  return str.reduce((oldest, a) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(a.yearOfBirth, a.yearOfDeath);
    return oldestAge < currentAge ? a : oldest;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
