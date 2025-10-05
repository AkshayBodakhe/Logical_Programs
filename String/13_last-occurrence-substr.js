const firstOccurrenceOfSubstr = (str, substr) => {
  let lastOccIndex = -1;
  for (let i = 0; i <= str.length - substr.length; i++) {
    let j = 0;
    while (j < substr.length && str[i + j] === substr[j]) {
      j++;
    }
    if (j === substr.length) {
      lastOccIndex = i;
    //   console.log(lastOccIndex)
    }
  }
  return lastOccIndex;
};
const str = "mobile is ile ile il";
const result = firstOccurrenceOfSubstr(str, "ile");
console.log(result);

