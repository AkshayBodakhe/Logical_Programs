const findOccurrence = (arr, ele) => {
  let occurrence = 0;
  for (let i = 0; i < arr.length; i++) {
    if (ele === arr[i]) {
      occurrence++;
    }
  }
  return occurrence
};
const array = [1,2,3,4,5,6,1,1,1,4]
console.log(findOccurrence(array,4))