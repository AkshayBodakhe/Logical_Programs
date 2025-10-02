
const checkPalindrome = (string) => {
  let str = string.split("");
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    [str[start], str[end]] = [str[end], str[start]];
    start++;
    end--;
  }
  const reversed = str.join("");

  return reversed === string;
};

const result = checkPalindrome("madam");
console.log(result);
