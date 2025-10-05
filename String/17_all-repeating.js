
function firstRepeatingCharMap(str) {
  let map = new Map();
  let result = []

  for (let char of str) {
    if(char === " ") continue
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let [char, count] of map) {
    // this will return repeating chars
    if (count > 1) {
        result.push(char)
    }

    // // this will return non-repeating chars
    // if (count === 1) {
    //     result.push(char)
    // }
  }
  return result;
}

const str = "mobile is very ill and i am ill";
const result = firstRepeatingCharMap(str, "ill", "great thing");
console.log(result);
