const countDigits = (str) => {
  let count = 0;

  for (let ch of str) {
    if (ch >= "0" && ch <= "9") {
      count++
    }
  }
  return count;
};

const result = countDigits("Hello 23232 world");
console.log(result)
