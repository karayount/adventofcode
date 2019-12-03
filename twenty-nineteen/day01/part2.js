const fs = require("fs");

const inputText = fs.readFileSync("../input.txt").toString("utf-8");
const masses = inputText.split("\n");

const calculateFuelRequirementByMass = mass => {
  const interim = Number.parseInt(mass / 3, 10);
  return interim - 2;
};

const calculateFuelRequired = mass => {
  const fuelRequired = calculateFuelRequirementByMass(mass);
  if (fuelRequired <= 0) {
    return 0;
  } else {
    return fuelRequired + calculateFuelRequired(fuelRequired);
  }
};

let sumFuelRequirements = 0;

masses.forEach(mass => {
  sumFuelRequirements += calculateFuelRequired(mass);
});

console.log("total fuel required", sumFuelRequirements);
