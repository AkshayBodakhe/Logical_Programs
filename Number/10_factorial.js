// a factorial is multiplication of numbers from given number to 1
// 5! = 5*4*3*2*1 = 120


// using recursion
function factorial(num) {
  if (typeof num !== "number") return "Not a number";
  if (num === 0 || num === 1) return 1;

  return num * factorial(num - 1);
}

// using loop
const factorial2 = (num) => {
  if (num < 0) return false;
  if (num === 0 || num === 1) return 1;
  let result = 1;

  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};

const num = 5;
const result = factorial2(num);
console.log(result);
