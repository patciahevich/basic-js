const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const left = matrix[i][j-1]
      const right = matrix[i][j+1]
      const up = matrix[i-1] && matrix[i-1][j]
      const down = matrix[i+1] && matrix[i+1][j]
      const upLeft = matrix[i-1] && matrix[i-1][j-1]
      const upRight = matrix[i-1] && matrix[i-1][j+1]
      const downLeft = matrix[i+1] && matrix[i+1][j-1]
      const downRight = matrix[i+1] && matrix[i+1][j+1]
      
      if (!resultMatrix[i]) {
        resultMatrix[i] = []
      }
      
      resultMatrix[i][j] = [left, right, up, down, upLeft, upRight, downLeft, downRight].filter((item) => item === true).length
    }
  }
  return resultMatrix
}

module.exports = {
  minesweeper
};
