const secondMax = (arr) => {
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      secondMax = max; // previous max becomes second max
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return { max, secondMax };
};

const secondMin = (arr) => {
  let min = Infinity;
  let secondMin = Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      secondMin = min;   // old min becomes second min
      min = arr[i];
    } else if (arr[i] < secondMin && arr[i] > min) {
      secondMin = arr[i];
    }
  }

  return secondMin === Infinity ? null : secondMin;
};

const array = [1, 2, 3, 4, 5, 6];
const result = secondMax(array);
const resultMin = secondMin(array);
console.log(resultMin);
