function firstNonRepeatingCharObj(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) return char;
  }
  return null
}

// -------------------------------------------

function firstNonRepeatingCharMap(str) {
  let map = new Map();

  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let [char, count] of map) {
    if (count === 1) return char;
  }
  return null
}

const str = "mobile is very ill and i am ill";
const result = firstNonRepeatingCharObj(str, "ill", "great thing");
console.log(result);
