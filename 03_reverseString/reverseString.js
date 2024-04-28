const reverseString = function (str) {
  let newStr = [];
  str.split("").forEach((element) => {
    newStr.unshift(element);
  });
  return newStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
