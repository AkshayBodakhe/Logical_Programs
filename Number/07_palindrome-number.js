const reverseNumber = (num) => {
  const temp = num;
  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  return temp === reverse
};
const number = 12321
const result = reverseNumber(number);
console.log(result);


// the same program is used for reversing the number // 06_reverse-number.js
