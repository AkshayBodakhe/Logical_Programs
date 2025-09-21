// Program to find the largest of two numbers

// Method 1: Using if-else statement
function findLargestOfTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Method 2: Using ternary operator
const findLargestTernary = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
};

// Method 3: Using Math.max()
const findLargestMath = (num1, num2) => {
    return Math.max(num1, num2);
};

// Test the functions
const number1 = 15;
const number2 = 25;

console.log(`Numbers: ${number1} and ${number2}`);
console.log(`Largest using if-else: ${findLargestOfTwo(number1, number2)}`);
console.log(`Largest using ternary: ${findLargestTernary(number1, number2)}`);
console.log(`Largest using Math.max: ${findLargestMath(number1, number2)}`);
