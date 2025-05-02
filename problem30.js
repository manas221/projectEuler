// the proof is simple but was tiring for me, got to sharpen my skills again
// the main gist of all this is there are 4 variates here
// N = the number itself
// n = no. of digits
// k = power, which here is 5
// f(n,k) = (a0^k + a1^k + a2^k and so on)
// our answer ie the number stops lying in a space when minimum possible value of N for n digits
// starts being larger than maximum value of f(n,k)
// for k=5, this means for all n belongs to T
// max val of f(n,5) could be (9^5).n
// min val of N of n digit would 10^(n-1)
// for all intervals where 10^(n-1) > 9^5).n, which is n>= 7
// there is no real value of n
// so we have to iterate over n = [2, 10^6] to find the answer
// we can optimize this space further to find an equation but computer would
// do the grunt work for that
import _ from "lodash";
import { number2Array } from "./utils/digitsToArray.js";

const getFifthPowerSum = (num) => {
  let numberArray = [];
  let temp = _.clone(num);
  let i = 1;
  while (temp > 0) {
    numberArray = [...numberArray, temp % 10];
    temp = Math.floor(temp / 10);
    ++i;
  }
  const fifthPowerSum = _.reduce(
    numberArray,
    (acc, d) => {
      return acc + d ** 5;
    },
    0,
  );

  if (fifthPowerSum == 1) {
    // remove cases like 1000, 100, 1 etc
    return -1;
  }

  return fifthPowerSum;
};

function digitFifthPower() {
  const numbers = _.reduce(
    _.range(2, 1000001),
    (acc, num) => (getFifthPowerSum(num) == num ? [...acc, num] : acc),
    [],
  );
  return _.sum(numbers);
}

console.log(digitFifthPower());
