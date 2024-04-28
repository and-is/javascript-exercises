const convertToCelsius = function (fahn) {
  let cels = ((fahn - 32) / 9) * 5;
  if (Number.isInteger(cels)) {
    return cels;
  } else {
    return parseFloat(Number(cels).toFixed(1));
  }
};

const convertToFahrenheit = function (cels) {
  let fahn = (cels * 9) / 5 + 32;
  if (Number.isInteger(fahn)) {
    return fahn;
  } else {
    return parseFloat(Number(fahn).toFixed(1));
  }
  return fahn;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
