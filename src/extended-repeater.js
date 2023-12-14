const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const adds = new Array(options.additionRepeatTimes || 1).fill(`${options.addition === undefined ? '' : options.addition}`); // проверка, что добавочный элемент существует
  
  const addition = adds.join(options.additionSeparator || '|')
  
  const string = new Array(options.repeatTimes || 1).fill(`${str}${addition}`)
  
  return string.join(options.separator || '+');
}

module.exports = {
  repeater
};
