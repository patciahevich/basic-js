const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const dict = {}
  const arr = names.reduce((acc, item) => {
    if(acc.includes((item))) {
      dict[item] += 1;
      acc.push(`${item}(${dict[item]})`)
      dict[`${item}(${dict[item]})`] = 0
    
      return acc
    } else {
      dict[item] = 0
      acc.push(item)
      return acc
    }
  }, [])

  return arr
}

module.exports = {
  renameFiles
};
