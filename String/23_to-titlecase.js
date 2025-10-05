function toTitleCase(str) {
  let newStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " " && str[i] !== " ") {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

const string = "hi, i am akshay";
const result = toTitleCase(string);
console.log(result);
