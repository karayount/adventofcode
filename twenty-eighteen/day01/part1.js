const fs = require('fs');

const inputText = fs.readFileSync('./input.txt').toString('utf-8');
const frequencyChanges = inputText.split('\n');

let currentFrequency = 0;

for (let i = 0; i < frequencyChanges.length; i += 1) {
  const frequencyChange = parseInt(frequencyChanges[i]);
  currentFrequency += frequencyChange;
}

console.log('FINAL ANSWER:', currentFrequency);
