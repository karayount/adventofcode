const fs = require("fs");

const inputText = fs.readFileSync("../input.txt").toString("utf-8");
const inputLines = inputText.split("\n");

const claims = inputLines.map(inputLine => {
  const [claimId, atChar, offsetCoords, area] = inputLine.split(" ");
  const [leftOffset, topOffset] = offsetCoords
    .slice(0, -1)
    .split(",")
    .map(e => parseInt(e, 10));
  const [width, height] = area.split("x").map(e => parseInt(e, 10));

  return {
    claimId,
    leftOffset,
    topOffset,
    width,
    height
  };
});

const squareInches = {};
let aloneId;

for (let i = 0; i < claims.length; i += 1) {
  const claim = claims[i];
  for (let x = claim.leftOffset; x < claim.leftOffset + claim.width; x += 1) {
    for (let y = claim.topOffset; y < claim.topOffset + claim.height; y += 1) {
      const inchKey = `x${x}y${y}`;
      if (squareInches[inchKey]) {
        squareInches[inchKey] += 1;
      } else {
        squareInches[inchKey] = 1;
      }
    }
  }
}

for (let i = 0; i < claims.length; i += 1) {
  const claim = claims[i];
  let nonOverlap = true;
  for (let x = claim.leftOffset; x < claim.leftOffset + claim.width; x += 1) {
    for (let y = claim.topOffset; y < claim.topOffset + claim.height; y += 1) {
      const inchKey = `x${x}y${y}`;
      if (squareInches[inchKey] > 1) {
        nonOverlap = false;
      }
    }
  }
  if (nonOverlap === true) {
    aloneId = claim.claimId;
  }
}

console.log("aloneId", aloneId);
