const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if (Array.isArray(arr)) {
    const result = arr.map((item) => item = item);

    for (let i = 0; i < result.length; i++) {
      if (result[i] === '--discard-next') {
        result[i] = undefined
        result[i + 1] = undefined
      } else if (result[i] === '--discard-prev') {
        result[i - 1] = undefined
        result[i] = undefined
      } else if (result[i] === '--double-next') {
        result[i] = result[i + 1]
      } else if (result[i] === '--double-prev') {
        result[i] = result[i - 1]
      } 
    }
    return result.filter((item) => item !== undefined)
  } 
  throw new Error (`'arr' parameter must be an instance of the Array!`)

}

module.exports = {
  transform
};
