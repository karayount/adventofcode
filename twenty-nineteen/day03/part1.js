// --- Day 3: Crossed Wires ---

// Here are a few more examples:

// R75,D30,R83,U83,L12,D49,R71,U7,L72
// U62,R66,U55,R34,D71,R55,D58,R83 = distance 159
// R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
// U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 = distance 135
// What is the Manhattan distance from the central port to the closest intersection?

const fs = require("fs");

const inputText = fs.readFileSync("../dummyInput.txt").toString("utf-8");
const wires = inputText.split("\n");
const wireOne = wires[0].split(",");
const wireTwo = wires[1].split(",");

const layDownWireOnePath = () => {
  const wireOnePath = {};
  let xCoord = 0;
  let yCoord = 0;
  for (let i = 0; i < wireOne.length; i += 1) {
    const direction = wireOne[i][0];
    const distance = parseInt(wireOne[i].substr(1), 10);

    if (direction === "U") {
      for (let j = 1; j <= distance; j += 1) {
        wireOnePath[`${xCoord}x${yCoord + j}`] = "here";
      }
      yCoord += distance;
    }
    if (direction === "D") {
      for (let j = 1; j <= distance; j += 1) {
        wireOnePath[`${xCoord}x${yCoord - j}`] = "here";
      }
      yCoord -= distance;
    }
    if (direction === "R") {
      for (let j = 1; j <= distance; j += 1) {
        wireOnePath[`${xCoord + j}x${yCoord}`] = "here";
      }
      xCoord += distance;
    }
    if (direction === "L") {
      for (let j = 1; j <= distance; j += 1) {
        wireOnePath[`${xCoord - j}x${yCoord}`] = "here";
      }
      xCoord -= distance;
    }
  }

  return wireOnePath;
};

const logIntersectionDistances = wireOnePath => {
  const distances = [];
  let xCoord = 0;
  let yCoord = 0;
  for (let i = 0; i < wireTwo.length; i += 1) {
    const direction = wireTwo[i][0];
    const distance = parseInt(wireTwo[i].substr(1), 10);

    if (direction === "U") {
      for (let j = 1; j <= distance; j += 1) {
        if (wireOnePath[`${xCoord}x${yCoord + j}`]) {
          distances.push(xCoord + yCoord + j);
        }
      }
      yCoord += distance;
    }
    if (direction === "D") {
      for (let j = 1; j <= distance; j += 1) {
        if (wireOnePath[`${xCoord}x${yCoord - j}`]) {
          distances.push(xCoord + yCoord - j);
        }
      }
      yCoord -= distance;
    }
    if (direction === "R") {
      for (let j = 1; j <= distance; j += 1) {
        if (wireOnePath[`${xCoord + j}x${yCoord}`]) {
          distances.push(xCoord + j + yCoord);
        }
      }
      xCoord += distance;
    }
    if (direction === "L") {
      for (let j = 1; j <= distance; j += 1) {
        if (wireOnePath[`${xCoord - j}x${yCoord}`]) {
          distances.push(xCoord - j + yCoord);
        }
      }
      xCoord -= distance;
    }
  }
  return distances;
};

const findNearestIntersection = () => {
  const wireOnePath = layDownWireOnePath();
  const distancesOfIntersections = logIntersectionDistances(wireOnePath);
  const sortedDistances = distancesOfIntersections.sort((a, b) => a - b);

  console.log("sorted distances", sortedDistances);
  console.log("shortest path", sortedDistances[0]);
};

findNearestIntersection();
