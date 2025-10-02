const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
};

const reverseString2 = (string) => {
  let str = string.split("");
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    [str[start], str[end]] = [str[end], str[start]];
    start++;
    end--;
  }
  return str.join(""); 
};

const result = reverseString2("hello world");
console.log(result);

