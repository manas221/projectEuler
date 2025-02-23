import _ from "lodash";

import { countNoOfDigits } from "./utils.js";

const isEligibleTriplet = (a, b, c) => {
  const na = countNoOfDigits(a);
  const nb = countNoOfDigits(b);
  const nc = countNoOfDigits(c);

  if (nc > na + nb + 1 || nc < Math.max(na, nb)) {
    return false;
  }
  return true;
};

const panDigitalProducts = () => {
  const n = countNoOfDigits(123456789);
  console.log(n);
};

panDigitalProducts();
