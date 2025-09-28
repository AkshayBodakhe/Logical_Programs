// remove all occurrences
const deleteSpecificElement = (arr, ele) => {
  let newLength = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ele) {
      arr[newLength] = arr[i];
      newLength++;
    }
  }
  arr.length = newLength;
  return arr;
};

const deleteFirstOccurrence = (arr, ele) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr.length = arr.length - 1;
      break;
    }
  }

  return arr;
};

const replaceAllElementsWithItem = (arr,ele,item) => {
  for(let i = 0; i < arr.length ; i++){
    if(arr[i] === ele){
      arr[i] = item
    }
  }
  return arr
}

const array = [1, 2, 3, 4, 5, 2];
// const result = deleteFirstOccurrence(array, 2);
const result2 = replaceAllElementsWithItem(array, 2,8);
console.log(result2);
