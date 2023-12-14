const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');

  const arr = [];
  
  for (let i = 0; i < digits.length; i++) {
    let draft = digits.map((item) => item);
    draft.splice(i, 1)
    arr.push(parseInt(draft.join('')))
  }

  return Math.max(...arr)

}
module.exports = {
  deleteDigit
};
