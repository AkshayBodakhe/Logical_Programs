// Program to check if a number is positive, negative, or zero

const checkNumber = (num) => {
  if (typeof num !== "number") {
    return `${num} is not a number`;
  }

  if (num > 0) {
    return `${num} is positive`;
  }
  if (num < 0) {
    return `${num} is negative`;
  } else {
    return `${num} is 0`;
  }
};

const number = -1;
const result = checkNumber(number);
console.log(result);
