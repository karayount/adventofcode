const LOWER_LIMIT = 347312;
const UPPER_LIMIT = 805915;

const twoAdjacentDigitsMatch = password => {
  const repeatedDigits = password.match(/(.)\1/g);
  if (!repeatedDigits) {
    return false;
  }
  let justTwo = false;
  repeatedDigits.forEach(repeat => {
    const digit = repeat[0];
    const pattern = `${digit}{3}`;
    if (!password.match(new RegExp(pattern))) {
      justTwo = true;
    }
  });

  return justTwo;
};

const digitsNeverDecrease = password => {
  for (let i = 0; i < password.length - 1; i += 1) {
    const num = password[i];
    const nextNum = password[i + 1];
    if (nextNum < num) {
      return false;
    }
  }

  return true;
};

const meetsCriteria = password => {
  return twoAdjacentDigitsMatch(password) && digitsNeverDecrease(password);
};

const countPasswordsMeetingCriteria = () => {
  let count = 0;
  for (let i = LOWER_LIMIT; i <= UPPER_LIMIT; i += 1) {
    const password = i.toString();
    if (meetsCriteria(password)) {
      count += 1;
    }
  }
  console.log("How many passwords meet criteria?", count);
};

countPasswordsMeetingCriteria();
