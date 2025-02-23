import _ from "lodash";
import { isPrime } from "./utils/primeNumbers.js";

const y = (x, a, b) => x ** 2 + a * x + b;

const getMaxValueTillConsistentPrime = (a, b) => {
  let i = 0;
  while (isPrime(y(i, a, b))) {
    i += 1;
  }

  return i;
};

const quadraticPrimes = () => {
  const b_range = _.filter(_.range(1, 1000), isPrime);
  const a_range = _.range(-1000, 1001);

  let maxValueOfAxB = 0;
  let ans = 0;

  _.forEach(b_range, (b) => {
    _.forEach(a_range, (a) => {
      const maxValueTillPrime = getMaxValueTillConsistentPrime(a, b);
      if (maxValueTillPrime !== 0) {
        // maxValueOfAxB = _.max([a * b, maxValueOfAxB]);
        if (maxValueTillPrime >= maxValueOfAxB) {
          maxValueOfAxB = maxValueTillPrime;
          ans = a * b;
        }
      }
    });
  });

  return ans;
};

console.log(quadraticPrimes());
