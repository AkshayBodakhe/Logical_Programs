
//Selection Sort is a sorting algorithm that repeatedly selects the smallest (or largest) element from the unsorted part of the array and places it at the beginning (or end) until the whole array is sorted.


const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n- 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

const array = [8, 6, 7, 5, 2, 3, 4, 1];
const result = selectionSort(array);
console.log(result);


// Algorithm
/* 
for i = 0 to n-2:
   minIndex = i
   for j = i+1 to n-1:
       if A[j] < A[minIndex]:
           minIndex = j
   swap A[i], A[minIndex]
*/

