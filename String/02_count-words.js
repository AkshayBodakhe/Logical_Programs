const wordCount = (str) => {
  let inWord = false;
  let wordCount = 0;

  for (let i = 0; i < str.length; i++) {
    if(str[i] !== " " && !inWord) {
      wordCount++
      inWord = true
    } else if(str[i] === " " && inWord) {
      inWord = false
    }
  }
  return wordCount
};

let string = "this is a string";

let word = string.split(" ").length;

console.log(word);
console.log(wordCount(string));
