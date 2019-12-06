const fs = require("fs");

const inputText = fs.readFileSync("../input.txt").toString("utf-8");
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
          const distance = Math.abs(xCoord) + Math.abs(yCoord + j);
          distances.push(distance);
        }
      }
      yCoord += distance;
    }
    if (direction === "D") {
      for (let j = 1; j <= distance; j += 1) {
        if (wireOnePath[`${xCoord}x${yCoord - j}`]) {
          const distance = Math.abs(xCoord) + Math.abs(yCoord - j);
          distances.push(distance);
        }
      }
      yCoord -= distance;
    }
    if (direction === "R") {
      for (let j = 1; j <= distance; j += 1) {
        if (wireOnePath[`${xCoord + j}x${yCoord}`]) {
          const distance = Math.abs(xCoord + j) + Math.abs(yCoord);
          distances.push(distance);
        }
      }
      xCoord += distance;
    }
    if (direction === "L") {
      for (let j = 1; j <= distance; j += 1) {
        if (wireOnePath[`${xCoord - j}x${yCoord}`]) {
          const distance = Math.abs(xCoord - j) + Math.abs(yCoord);
          distances.push(distance);
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

  console.log("shortest path", sortedDistances[0]);
};

findNearestIntersection();
