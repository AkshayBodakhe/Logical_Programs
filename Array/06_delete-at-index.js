const deleteEleAtIndex = (arr, index) => {
  let newArr = [];
  for (let i = 0; i < index; i++) {
    newArr[i] = arr[i];
  }
  for (let j = index; j < arr.length - 1; j++) {
    newArr[j] = arr[j + 1];
  }
  return newArr;
};

const deleteElementAtIndexSingleLoop = (arr, index) => {
  if (index < 0 || index >= arr.length) return arr;
  for (let j = index; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr.length -= 1;
  return arr;
};

const array = [1, 2, 3, 4, 5,6,5];

const result = deleteElementAtIndexSingleLoop(array, 2);
console.log(result);
