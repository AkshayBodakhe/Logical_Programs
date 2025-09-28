const isSortedAsc = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {  // < means asc , > means desc
      return false;
    }
  }
  return true;
};

// both for ascending / descending

const isSorted = (arr) => {
  let ascending = true;
  let descending = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) ascending = false;
    if (arr[i] > arr[i - 1]) descending = false;
  }
  if(ascending) return "array is sorted ascending"
  if(descending) return "array is sorted descending"
  return "Array isn't sorted"

};

const arrayAsc = [1, 2, 3, 4, 5];
const arrayDesc = [5, 4, 3, 2, 1];
const result = isSorted(arrayDesc);
console.log(result);
