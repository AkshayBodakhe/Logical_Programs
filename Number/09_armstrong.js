// Armstrong numbers are numbers that are equal to the sum of their digits each raised to the power of the total number of digits in the number

const checkArmstrong = (num) => {
  let length = num.toString().length; 
  let temp = num
  let finalNum = 0
  while(num > 0){
    let lastDigit = num % 10
    finalNum = finalNum + Math.pow(lastDigit,length)
    num = Math.floor(num / 10)
  }
  return temp === finalNum
};

const num = 1634;
const result = checkArmstrong(num)
console.log(result)

const testNumbers = [153, 371, 407, 1634, 8208, 9474, 54748, 92727, 93084, 123, 456];

testNumbers.forEach(num => {
  const result = checkArmstrong(num);
  console.log(`${num}: ${result ? 'Armstrong' : 'Not Armstrong'}`);
});

const res = testNumbers.filter((num)=>checkArmstrong(num))
console.log(res)