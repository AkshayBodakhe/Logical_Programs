
function removeWhiteSpaces(str) {
  let result = "";
  for (let char of str) {
    if (char === " " || char === "\t" || char === "\n") {
      continue; // this will skip spaces'
    //   result += "-"  // this will replaces all spaces with -
    }
    result += char;
  }
  return result;
}

const string = `hello, I AM Akshay,     My dob 
is 31`;
let result = removeWhiteSpaces(string);
console.log(result);


// str.replace(/\s+/g, "") -> built-in

// if (/\s+/g.test(char)) {