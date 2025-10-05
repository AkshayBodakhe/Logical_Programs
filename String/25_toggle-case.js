function toggleCase(str) {
  let result = "";
  for (let char of str) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    }else {
        result += char
    }
  }
  return result;
}


const upperString = "hello, I AM Akshay, My dob is 31"
let upperResult = toggleCase(upperString);
console.log(upperResult);