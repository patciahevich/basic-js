const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('')
  
  const result = [];
  let counter = 1; // заводим счетчик
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) { // если следующая буква такая же, счетчик увеличиваем. иначе кладем результат счатчик (если он больше одного) и букву в результат, а счетчик обнуляем
      counter++
    } else {
      if (counter > 1) {
        result.push(counter);
      }
      result.push(arr[i]);
      counter = 1
    }
  }
  return result.join('')
}

module.exports = {
  encodeLine
};
