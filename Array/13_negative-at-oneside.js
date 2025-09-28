const negativeAtOneSide = (arr) => {
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      start++;
    }
  }
  return arr;
};

const array = [8, -6, 7, -5, -2, 3, 4, 1];
const result = negativeAtOneSide(array);
console.log(result);
