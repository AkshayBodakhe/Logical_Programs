// In this program the sum and product logic is done
// product should be initialized with 1 because 0 * anything is 0

const sumOfDigits = (num) => {
  let sum = 0;
  let product = 1
  let count = 0
  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    product = product * digit
    num = Math.floor(num / 10)
    count++
  }
  return {sum , product, count};
};

const result = sumOfDigits(12345)
console.log(result);

