import _ from "lodash";
// generate an array containing all abundant numbers from 12 to 28123-12=28111
// for every number from 24 till 28111, check if they can be expressed as sum of two number abundant
// subtract the sum from sigma(28123)
//

const SUM_TILL_28123 = 395465626;

function getSumOfProperDivisors(num) {
  let i = 1;
  let factors = new Set();
  while (i * i <= num) {
    if (num % i === 0) {
      factors.add(i);
      num / i === num || factors.add(num / i);
    }
    ++i;
  }
  return _.sum([...factors]);
}

function getAbundanceDistance(num) {
  return getSumOfProperDivisors(num) - num;
}

const ABUNDANT_NUMBERS = _.filter(
  _.range(12, 28112),
  (num) => getAbundanceDistance(num) > 0,
);

function checkForAbundantPairOfParts(num) {
  let i = 0;
  let hasAbundantPairOfParts = false;
  while (
    i < _.size(ABUNDANT_NUMBERS) &&
    (!hasAbundantPairOfParts || ABUNDANT_NUMBERS[i] <= num)
  ) {
    if (_.includes(ABUNDANT_NUMBERS, num - ABUNDANT_NUMBERS[i])) {
      hasAbundantPairOfParts = true;
    }
    ++i;
  }
  return hasAbundantPairOfParts;
}

function nonAbundantSums() {
  const start = Date.now();
  const sumOfNumbersWithAbundantParts = _.reduce(
    _.range(24, 28124),
    (acc, num) => {
      if (num % 1000 === 0) {
        console.log(`reached ${num}`);
      }
      const hasAbundantParts = checkForAbundantPairOfParts(num);
      return acc + (hasAbundantParts && num);
    },
    0,
  );
  const res = SUM_TILL_28123 - sumOfNumbersWithAbundantParts;
  const end = Date.now();
  return res;
}

// nonAbundantSums();
console.log(checkForAbundantPairOfParts(28123));
