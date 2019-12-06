const fs = require("fs");

const inputText = fs.readFileSync("../input.txt").toString("utf-8");
const inputStrings = inputText.split(",");
let opcodes = inputStrings.map(opcode => parseInt(opcode, 10));

const runIntcodeProgram = input => {
  let pointer = 0;
  while (pointer < opcodes.length) {
    let opcode = opcodes[pointer];
    let modes = [];
    if (opcode === 99) {
      break;
    }
    if (opcode > 99) {
      const combo = opcode;
      opcode = combo % 100;
      const rawModes = combo
        .toString()
        .slice(0, -2)
        .split("");
      modes = [
        parseInt(rawModes[rawModes.length - 1], 10) || 0,
        parseInt(rawModes[rawModes.length - 2], 10) || 0,
        parseInt(rawModes[rawModes.length - 3], 10) || 0
      ];
    }
    if (opcode === 1) {
      const [firstParameter, secondParameter, outputPosition] = opcodes.slice(
        pointer + 1,
        pointer + 4
      );
      const firstAddend =
        modes[0] && modes[0] === 1 ? firstParameter : opcodes[firstParameter];
      const secondAddend =
        modes[1] && modes[1] === 1 ? secondParameter : opcodes[secondParameter];
      opcodes[outputPosition] = firstAddend + secondAddend;
      pointer += 4;
    }
    if (opcode === 2) {
      const [firstParameter, secondParameter, outputPosition] = opcodes.slice(
        pointer + 1,
        pointer + 4
      );
      const firstFactor =
        modes[0] && modes[0] === 1 ? firstParameter : opcodes[firstParameter];
      const secondFactor =
        modes[1] && modes[1] === 1 ? secondParameter : opcodes[secondParameter];
      opcodes[outputPosition] = firstFactor * secondFactor;
      pointer += 4;
    }
    if (opcode === 3) {
      const inputAddress = opcodes[pointer + 1];
      opcodes[inputAddress] = input;
      pointer += 2;
    }
    if (opcode === 4) {
      const outputAddress = opcodes[pointer + 1];
      console.log("OUTPUT", opcodes[outputAddress]);
      pointer += 2;
    }
  }
};

runIntcodeProgram(1);
