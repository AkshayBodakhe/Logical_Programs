// Program to swap two numbers using temporary variable

let num1 = 12;
let num2 = 13;

const swipeNumber = (num1, num2) => {
  num1 = num1 ^ num2;
  console.log(num1)
  num2 = num1 ^ num2;
  console.log(num2)
  num1 = num1 ^ num2;
  console.log(num1)
  return {num1, num2}
};

const result = swipeNumber(num1,num2)
// console.log(num1,num2),
console.log(result)


// 12 
// 13

// 8 4 2 1
// num1 = 1 1 0 0
//          ^
// num2 = 1 1 0 1
// =
// num1 = 0001 

// num1 = 0001 
//         ^
// num2 = 1101
// =       
// num2 = 1100

// num1 = 0001
//         ^
// num2 = 1100
// = 