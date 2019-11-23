const fs = require('fs');

const inputText = fs.readFileSync('../input.txt').toString('utf-8');
const boxIds = inputText.split('\n');

let twiceCount = 0;
let thriceCount = 0;

const buildLetterCounts = str => {
  const letterCounts = {};
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (letterCounts[char]) {
      letterCounts[char] += 1;
    } else {
      letterCounts[char] = 1;
    }
  }
  return letterCounts;
}

const hasLetterNTimes = (letterCounts, n) => {
  const letters = Object.keys(letterCounts);
  for (let i = 0; i < letters.length; i += 1) {
    const letter = letters[i];
    if (letterCounts[letter] == n) {
      return true;
    }
  }
  return false;
}

for (let i = 0; i < boxIds.length; i += 1) {
  const boxId = boxIds[i];
  const letterCounts = buildLetterCounts(boxId);
  if (hasLetterNTimes(letterCounts, 2)) {
    twiceCount += 1;
  }
  if (hasLetterNTimes(letterCounts, 3)) {
    thriceCount += 1;
  }
}

console.log('CHECKSUM IS', twiceCount * thriceCount);