function toUpperCase(str) {
  let result = "";
  for (const char of str) {
    let code = char.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += char;
    }
  }
  return result;
}

const string = "i am sam";
let result = toUpperCase(string);
// console.log(result);


function toLowerCase(str) {
  let result = "";
  for (const char of str) {
    let code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += char;
    }
  }
  return result;
}



const upperString = "I AM John"
let upperResult = toLowerCase(upperString);
console.log(upperResult);