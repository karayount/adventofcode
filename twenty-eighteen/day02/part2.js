const fs = require('fs');

const inputText = fs.readFileSync('../input.txt').toString('utf-8');
const boxIds = inputText.split('\n');

for (let i = 0; i < boxIds.length - 1; i += 1) {
  for (let j = i + 1; j < boxIds.length; j += 1) {
    let mismatchCount = 0;
    let mismatchIndex;
    const boxA = boxIds[i];
    const boxB = boxIds[j];

    for (let k = 0; k < boxA.length; k += 1) {
      const charA = boxA[k];
      const charB = boxB[k];
      if (charA !== charB) {
        mismatchCount += 1;
        mismatchIndex = k;
      }
    }
    if (mismatchCount === 1) {
      console.log('MATCHING BITS', boxA.slice(0, mismatchIndex) + boxA.slice(mismatchIndex+1));
    }
  }
}