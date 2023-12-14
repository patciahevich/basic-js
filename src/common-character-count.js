const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function lettersCounter (string) {
    return string.split('').reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  }
  
  const letters1 = lettersCounter(s1);
  const letters2 = lettersCounter(s2);
  
 let counter = 0;
  
  for (let key in letters1) {
    if (key in letters2) {
      counter += Math.min(letters1[key], letters2[key])
    }
  }
  return counter;  
}

module.exports = {
  getCommonCharacterCount
};
