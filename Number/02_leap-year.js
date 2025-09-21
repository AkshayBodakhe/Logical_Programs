

// if year % 4 && year % 100 != 0 it is leap year
// if year % 400 , it is a leap year
// year % 1 , means value should be whole number not .5

const checkLeapYear = (num) => {
  if (typeof num  !== "number" || num % 1 !== 0) {
    return "Input is not a valid integer";
  }
  if((num % 4 ===0 && num % 100 !== 0 ) || num % 400){
    return `${num} is a leap year`
  } {
    return `${num} is not a leap year`
  }
};

const year = 2004;
const result = checkLeapYear(year);
console.log(result);
