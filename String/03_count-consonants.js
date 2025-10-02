const countConsonants = (str) => {
  let vowels = new Set("aeiou");
  let count = 0;

  for (let ch of str) {
    // if(/[a-zA-Z]/.test(ch) && !vowels.has(ch)){
    //     count++
    // }
    ch = ch.toLowerCase();
    if (ch >= "a" && ch <= "z" && !vowels.has(ch)) {
      count++;
    }
  }
  return count;
};

const result = countConsonants("Hello world");
console.log(result);
