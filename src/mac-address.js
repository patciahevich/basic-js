const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const validator = '0123456789ABCDEF';
  const arr = n.split('-');
  if (arr.filter((item) => item.length === 2).length === arr.length) {// проверка на правильную разбивку 
    if (arr.filter((item) => { // проверка валидатором оба символа
      return validator.includes(item[0]) && validator.includes(item[1])
    }).length === arr.length) {
      return true;
    }
    return false;
  }
  return false;
}
module.exports = {
  isMAC48Address
};
