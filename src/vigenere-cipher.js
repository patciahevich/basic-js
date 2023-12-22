const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  arr = []
  
  constructor(directFlag = true) {
    this.directFlag = directFlag;
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row += this.alphabet.slice(0, i);
      this.arr.push(row.split(''))
    }
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    } 
    let result = '';
    let newString = string.toUpperCase();
    let newKey = key.toUpperCase();
    let counter = 0
    for (let j = 0; j < newString.length; j++) {
      if (this.alphabet.includes(newString[j])) {
        let i = this.alphabet.indexOf(newString[j]);
        let y = this.alphabet.indexOf(newKey[counter % key.length])
        result += this.arr[y][i] 
        counter++
      } else {
        result += newString[j]
      }
    }
    if (this.directFlag) {
      return result
    }
    return result.split('').reverse().join('')
   
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let result = '';
    let newString = string.toUpperCase();
    let newKey = key.toUpperCase();
    let counter = 0
 
    for (let x = 0; x < newString.length; x++) {
      if(this.alphabet.includes(newString[x])) {
        let i = this.alphabet.indexOf(newKey[counter % key.length]);
        let j = this.arr[i].indexOf(newString[x]);
        result += this.alphabet[j];
        counter++
      } else {
        result += newString[x];
      }
    }
    if (this.directFlag) {
      return result
    }
    return result.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
