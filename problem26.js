import _ from "lodash";

function getRepeatingBlockSize(b) {
  // a = bq + r
  let a = 1;
  let remainders = [];
  let blockSize = 0;
  while (1) {
    if (a == 0) {
      blockSize = -1;
      console.error("No repeating block found for ", b);
      break;
    }

    if (_.includes(remainders, a)) {
      break;
    }

    remainders = [...remainders, a];

    if (a < b) {
      a *= 10;
    }

    a = a % b;
    blockSize += 1;
  }

  return blockSize;
}

function reciprocalCycles() {
  const res = {
    num: 0,
    blockSize: 0,
  };
  _.forEach(_.range(1, 1001), (d) => {
    const currBlockSize = getRepeatingBlockSize(d);
    if (currBlockSize >= res.blockSize) {
      res.num = d;
      res.blockSize = currBlockSize;
    }
  });

  console.log("result", res);
}

reciprocalCycles();
