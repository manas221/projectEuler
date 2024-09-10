import _ from "lodash";

import { BASE_N } from "./constants.js";

export const number2Array = (number) => {
  const temp = _.map(Array(BASE_N), () => 0);
  let n = number;
  let i = 1;
  while (n > 0) {
    const rem = n % 10;
    const newN = Math.floor(n / 10);

    temp[i - 1] = rem;

    n = newN;
    i += 1;
  }

  return temp;
};

export const array2Number = (arr) => {
  let n = "";
  _.forEachRight(
    _.dropRightWhile(arr, (item) => item === 0),
    (digit) => {
      n = `${n}${_.toString(digit)}`;
    },
  );
  return n;
};

export const add2Arrays = (arr1, arr2) => {
  const sum = _.map(Array(BASE_N), () => 0);
  let carry = 0;
  _.forEach(sum, (_, index) => {
    const temp = arr1[index] + arr2[index] + carry;
    if (temp >= 10) {
      sum[index] = temp - 10;
      carry = 1;
      return;
    }
    sum[index] = temp;
    carry = 0;
  });

  return sum;
};

export const checkNoOfDigits = (arrAsNumber) =>
  _.size(_.dropRightWhile(arrAsNumber, (item) => item === 0));
