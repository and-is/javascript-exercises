const palindromes = function (str) {
  let onlyStr = str.toLowerCase();
  onlyStr = onlyStr.replace(/[^a-zA-Z0-9]/g, "");
  return onlyStr === onlyStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
