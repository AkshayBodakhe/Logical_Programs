
const replaceFirst = (str, substr, replacement) => {
  let result = "";
  let found = false;
  for (let i = 0; i < str.length; ) {
    let j = 0;

    while (j < substr.length && str[i + j] === substr[j]) {
      j++;
    }

    if (!found && j === substr.length) {
      result += replacement;
      i += substr.length
      found = true;
    } else {
      result += str[i];
      i++;
    }
  }
  return result;
};

//-----------------------------------------------

const replaceAll = (str, substr, replacement) => {
  let result = "";
  for (let i = 0; i < str.length; ) {
    let j = 0;

    while (j < substr.length && str[i + j] === substr[j]) {
      j++;
    }

    if (j === substr.length) {
      result += replacement;
      i += substr.length
    } else {
      result += str[i];
      i++;
    }
  }
  return result;
};


const str = "mobile is very ill and i am ill";
const result = replaceAll(str, "ill", "great thing");
console.log(result);

let obj = {a:2,b:3,f:3,c:1,d:5,e:1}
console.log(obj)

for(let i in obj){
    console.log(obj[i])
}

