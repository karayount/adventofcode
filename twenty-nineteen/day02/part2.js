const fs = require("fs");

const inputText = fs.readFileSync("../input.txt").toString("utf-8");
const inputStrings = inputText.split(",");
let opcodes = inputStrings.map(opcode => parseInt(opcode, 10));

const resetOpcodes = () => {
  return inputStrings.map(opcode => parseInt(opcode, 10));
};

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

const runIntcodeProgram = (noun, verb) => {
  opcodes[1] = noun;
  opcodes[2] = verb;

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
};

for (let noun = 0; noun < 100; noun += 1) {
  for (let verb = 0; verb < 100; verb += 1) {
    opcodes = resetOpcodes();
    runIntcodeProgram(noun, verb);

    if (opcodes[0] === 19690720) {
      console.log("FINAL RESULT", 100 * noun + verb);
    }
  }
}
