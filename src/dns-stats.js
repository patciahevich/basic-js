const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains.map((item) => item.split('.').reverse());
  console.log(arr);
  const result = {};
  arr.forEach((item) => {
    for (let i = 1; i <= item.length; i++) {
      const array = item.map((item) => item);
      let key = `.${array.splice(0, i).join('.')}`;
      if (result.hasOwnProperty(key)) {
         result[key] += 1;
       } else {
         result[key] = 1;
     }
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
