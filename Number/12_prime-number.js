// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// 2, 3, 5, 7, 11, 13, 17, 19,

// program contains the logic of checking prime number
// print the print from / upto range , count the prime numbers

const checkPrime = (num) => {
  if (num < 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const result = checkPrime(13);
// console.log(result)

const printPrimeUpto = (from = 1, upto) => {
  let primeNumbers = [];
  for (let num = from; num <= upto; num++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumbers.push(num);
    }
  }
  return {numbers:primeNumbers,count:primeNumbers.length}
};

console.log(printPrimeUpto(50, 100))
