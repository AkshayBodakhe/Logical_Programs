const firstOccurrenceOfSubstr = (str, substr) => {
  for (let i = 0; i <= str.length - substr.length; i++) {
    let j = 0;
    while (j < substr.length && str[i + j] === substr[j]) {
      j++;
    }
    if (j === substr.length) return i;
  }
  return -1;
};

const result = firstOccurrenceOfSubstr("mobile", "ile");
console.log(result);
