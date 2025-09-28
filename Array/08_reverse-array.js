const reverseArray = (arr) => {
  let startIndex = arr.length - 1;
  const newArr = [];
  for (let i = startIndex; i >= 0; i--) {
    newArr[newArr.length] = arr[i];
  }
  return newArr;
};

const reverseArrayHalfTraverse = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
};

const array = [1, 2, 3, 4, 5];

const result = reverseArrayHalfTraverse(array);
console.log(result);
