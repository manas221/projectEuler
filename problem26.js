import _ from "lodash";
// use euclid's lemma to get the answer

function getRepeatingBlock(b) {
  // a = bq + r
  let res = 0;
  let remainder_repeated = false;

  const remainders = {};
  let a = 1;

  let final_multiple = 1;

  while (!remainder_repeated) {
    if (a < b) {
      a *= 10;
      final_multiple = final_multiple / 10;
    }

    const q = Math.floor(a / b);
    const r = a % b;
  }
}

function reciprocalCycles() {
  let maxBlockSize = 0;

  _.forEach(_.range(1, 1000), (d) => {
    maxBlock = _.max([maxBlockSize, getRepeatingBlockSize(d)]);
  });

  console.log(maxBlockSize);
  return maxBlockSize;
}

reciprocalCycles();
