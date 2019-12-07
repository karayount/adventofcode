const fs = require("fs");

const inputText = fs.readFileSync("../input.txt").toString("utf-8");
const localOrbits = inputText.split("\n");

const orbitMap = {};

for (let i = 0; i < localOrbits.length; i += 1) {
  const orbit = localOrbits[i];
  const [orbited, orbiting] = orbit.split(")");
  orbitMap[orbiting] = orbited;
}

const countOrbits = orbiter => {
  if (orbitMap[orbiter] === "COM") {
    return 1;
  } else {
    return 1 + countOrbits(orbitMap[orbiter]);
  }
};

let totalOrbits = 0;
const orbiters = Object.keys(orbitMap);

for (let i = 0; i < orbiters.length; i += 1) {
  totalOrbits += countOrbits(orbiters[i]);
}

console.log("totalOrbits", totalOrbits);
