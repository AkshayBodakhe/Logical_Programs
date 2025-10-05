function removeSpecialChar(str) {
  let result = "";
  for (let char of str) {
    const code = char.charCodeAt(0);
    if (
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122) ||
      (code >= 48 && code <= 57) ||
        code === 32 // this will keep space
    ) {
      result += char;
    }
  }
  return result;
}

const string = "hello,!@#$%^& I AM Akshay, My dob is 3107";
let result = removeSpecialChar(string);
console.log(result);
