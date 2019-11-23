const fs = require('fs');

const inputText = fs.readFileSync('./input.txt').toString('utf-8');
const frequencyChanges = inputText.split('\n');

let currentFrequency = 0;
const reachedFrequencies = {};
let dupeFreqFound = false;

while (!dupeFreqFound) {
  for (let i = 0; i < frequencyChanges.length; i += 1) {
    const frequencyChange = parseInt(frequencyChanges[i]);
    currentFrequency += frequencyChange;
    if (reachedFrequencies[currentFrequency]) {
      dupeFreqFound = true;
      break;
    } else {
      reachedFrequencies[currentFrequency] = true;
    }
  }
}


console.log('FINAL ANSWER:', currentFrequency);