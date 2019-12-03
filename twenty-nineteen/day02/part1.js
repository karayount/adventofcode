const fs = require("fs");

const inputText = fs.readFileSync("../input.txt").toString("utf-8");
const inputStrings = inputText.split(",");
let opcodes = inputStrings.map(opcode => parseInt(opcode, 10));

// before running the program, replace position 1 with the value 12 and replace position 2 with the value 2
opcodes[1] = 12;
opcodes[2] = 2;

const add = (firstInputPosition, secondInputPosition, outputPosition) => {
  const firstAddend = opcodes[firstInputPosition];
  const secondAddend = opcodes[secondInputPosition];
  opcodes[outputPosition] = firstAddend + secondAddend;
};

const multiply = (firstInputPosition, secondInputPosition, outputPosition) => {
  const firstFactor = opcodes[firstInputPosition];
  const secondFactor = opcodes[secondInputPosition];
  opcodes[outputPosition] = firstFactor * secondFactor;
};

for (let i = 0; i < opcodes.length; i += 4) {
  const [
    opcode,
    firstInputPosition,
    secondInputPosition,
    outputPosition
  ] = opcodes.slice(i, i + 4);
  if (opcode === 99) {
    break;
  }
  if (opcode === 1) {
    add(firstInputPosition, secondInputPosition, outputPosition);
  }
  if (opcode === 2) {
    multiply(firstInputPosition, secondInputPosition, outputPosition);
  }
}

console.log("position zero", opcodes[0]);
