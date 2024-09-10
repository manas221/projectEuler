import _ from "lodash";

import {
  number2Array,
  array2Number,
  checkNoOfDigits,
  add2Arrays,
} from "./utils.js";

const thousandFibonacci = (n = 2) => {
  let fn = number2Array(2);
  let fn1 = number2Array(1);
  let fn2 = number2Array(1);

  let ind = 3;

  while (checkNoOfDigits(fn) < n) {
    fn2 = fn1;
    fn1 = fn;
    fn = add2Arrays(fn1, fn2);
    ind += 1;
  }

  console.log(`final number: ${array2Number(fn)}`);
  console.log(`index : ${ind}`);
};

thousandFibonacci(1000);
