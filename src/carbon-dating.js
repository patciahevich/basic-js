const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  // ln(N/N0) = -kt;
  // t = ln(N/N0)/k;
  //t1/2 = ln(N/N0)/k;
  // k = ln(N/N0)/t1/2;
  // N -  initial activity;
  // N0 - the final activity;

  if (typeof sampleActivity === 'string') { // integer must be a string
    const sample = Number.parseFloat(sampleActivity);
  
    if (!Number.isNaN(sample) && sample > 0  && sample < MODERN_ACTIVITY) {
      const number = Math.log(MODERN_ACTIVITY/sample);
      const k = 0.693/ HALF_LIFE_PERIOD;
      const age = number / k;
      return Math.ceil(age);
    }
   return false;
  }
  return false;
}

module.exports = {
  dateSample
};
