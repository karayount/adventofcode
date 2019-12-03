const fs = require("fs");

const inputText = fs.readFileSync("../input.txt").toString("utf-8");
const masses = inputText.split("\n");

const calculateFuelRequirementByMass = mass => {
  const interim = Number.parseInt(mass / 3, 10);
  return interim - 2;
};

let sumFuelRequirements = 0;

masses.forEach(mass => {
  sumFuelRequirements += calculateFuelRequirementByMass(mass);
});

console.log("total fuel required", sumFuelRequirements);
