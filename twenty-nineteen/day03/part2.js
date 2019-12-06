const fs = require("fs");

const inputText = fs.readFileSync("../input.txt").toString("utf-8");
const wires = inputText.split("\n");
const wireOne = wires[0].split(",");
const wireTwo = wires[1].split(",");

const layDownWireOnePath = () => {
  const wireOnePath = {};
  let xCoord = 0;
  let yCoord = 0;
  let steps = 0;
  for (let i = 0; i < wireOne.length; i += 1) {
    const direction = wireOne[i][0];
    const distance = parseInt(wireOne[i].substr(1), 10);

    if (direction === "U") {
      for (let j = 1; j <= distance; j += 1) {
        steps += 1;
        if (!wireOnePath[`${xCoord}x${yCoord + j}`]) {
          wireOnePath[`${xCoord}x${yCoord + j}`] = steps;
        }
      }
      yCoord += distance;
    }
    if (direction === "D") {
      for (let j = 1; j <= distance; j += 1) {
        steps += 1;
        if (!wireOnePath[`${xCoord}x${yCoord - j}`]) {
          wireOnePath[`${xCoord}x${yCoord - j}`] = steps;
        }
      }
      yCoord -= distance;
    }
    if (direction === "R") {
      for (let j = 1; j <= distance; j += 1) {
        steps += 1;
        if (!wireOnePath[`${xCoord + j}x${yCoord}`]) {
          wireOnePath[`${xCoord + j}x${yCoord}`] = steps;
        }
      }
      xCoord += distance;
    }
    if (direction === "L") {
      for (let j = 1; j <= distance; j += 1) {
        steps += 1;
        if (!wireOnePath[`${xCoord - j}x${yCoord}`]) {
          wireOnePath[`${xCoord - j}x${yCoord}`] = steps;
        }
      }
      xCoord -= distance;
    }
  }

  return wireOnePath;
};

const logStepsToIntersections = wireOnePath => {
  const totalSteps = [];
  let xCoord = 0;
  let yCoord = 0;
  let wireTwoSteps = 0;
  for (let i = 0; i < wireTwo.length; i += 1) {
    const direction = wireTwo[i][0];
    const distance = parseInt(wireTwo[i].substr(1), 10);

    if (direction === "U") {
      for (let j = 1; j <= distance; j += 1) {
        wireTwoSteps += 1;
        if (wireOnePath[`${xCoord}x${yCoord + j}`]) {
          totalSteps.push(
            wireOnePath[`${xCoord}x${yCoord + j}`] + wireTwoSteps
          );
        }
      }
      yCoord += distance;
    }
    if (direction === "D") {
      for (let j = 1; j <= distance; j += 1) {
        wireTwoSteps += 1;
        if (wireOnePath[`${xCoord}x${yCoord - j}`]) {
          totalSteps.push(
            wireOnePath[`${xCoord}x${yCoord - j}`] + wireTwoSteps
          );
        }
      }
      yCoord -= distance;
    }
    if (direction === "R") {
      for (let j = 1; j <= distance; j += 1) {
        wireTwoSteps += 1;
        if (wireOnePath[`${xCoord + j}x${yCoord}`]) {
          totalSteps.push(
            wireOnePath[`${xCoord + j}x${yCoord}`] + wireTwoSteps
          );
        }
      }
      xCoord += distance;
    }
    if (direction === "L") {
      for (let j = 1; j <= distance; j += 1) {
        wireTwoSteps += 1;
        if (wireOnePath[`${xCoord - j}x${yCoord}`]) {
          totalSteps.push(
            wireOnePath[`${xCoord - j}x${yCoord}`] + wireTwoSteps
          );
        }
      }
      xCoord -= distance;
    }
  }
  return totalSteps;
};

const findNearestIntersection = () => {
  const wireOnePath = layDownWireOnePath();
  const stepsToIntersections = logStepsToIntersections(wireOnePath);
  const sortedSteps = stepsToIntersections.sort((a, b) => a - b);

  console.log("shortest route", sortedSteps[0]);
};

findNearestIntersection();
