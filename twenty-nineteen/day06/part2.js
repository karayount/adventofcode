const fs = require("fs");

const inputText = fs.readFileSync("../input.txt").toString("utf-8");
const localOrbits = inputText.split("\n");

const orbitMap = {};

for (let i = 0; i < localOrbits.length; i += 1) {
  const orbit = localOrbits[i];
  const [orbited, orbiting] = orbit.split(")");
  orbitMap[orbiting] = orbited;
}

const orbitPath = (orbiter, path = []) => {
  if (orbitMap[orbiter] === "COM") {
    path.push("COM");
    return path;
  } else {
    path.push(orbitMap[orbiter]);
    return orbitPath(orbitMap[orbiter], path);
  }
};

const orbiters = Object.keys(orbitMap);
const orbitPathsMap = {};
for (let i = 0; i < orbiters.length; i += 1) {
  orbitPathsMap[orbiters[i]] = orbitPath(orbiters[i]);
}

const myPath = orbitPathsMap["YOU"];
const santaPath = orbitPathsMap["SAN"];

const howFarToSanta = (myPath, santaPath) => {
  if (myPath[myPath.length - 1] !== santaPath[santaPath.length - 1]) {
    return myPath.length + santaPath.length;
  }
  myPath.pop();
  santaPath.pop();
  return howFarToSanta(myPath, santaPath);
};

console.log("how many steps?", howFarToSanta(myPath, santaPath));
