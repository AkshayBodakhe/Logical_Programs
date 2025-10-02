const checkStartWith = (str, startWith) => {
  let start = true;
  for (let i = 0; i < startWith.length; i++) {
    if (str[i] != startWith[i]) {
      start = false;
    }
  }
  return start;
};

const checkEndsWith = (str, subStr) => {
  let startIndex = str.length - subStr.length;
  for (let i = 0; i < subStr.length; i++) {
    if (str[startIndex + i] != subStr[i]) {
      return false;
    }
  }
  return true;
};

const result = checkEndsWith("sandas", "das");
console.log(result);
