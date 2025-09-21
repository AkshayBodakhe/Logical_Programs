
const reverseNumber = (num) => {
  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;  // extract last digit 
    reverse = reverse * 10 + digit; // add into reverse
    num = Math.floor(num / 10); // number after extracting last digit
  }
  return reverse;
};

const result = reverseNumber(12345);
console.log(result);

// this reverse number program can be used for palindrome as well
// Math.floor is important to extract digit after .  ex, 1234.4 -> 1234