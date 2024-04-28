const removeFromArray = function (array, ...arr) {
  arr.forEach((a) => {
    while (array.includes(a)) {
      toDel = array.indexOf(a);
      array.splice(toDel, 1);
    }
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
