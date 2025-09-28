// Insertion Sort is a simple sorting algorithm that builds the sorted portion of the array one element at a time by repeatedly inserting the current element into its correct position among the already sorted elements.

const insertionSort = (a) => {
  for (let i = 1; i < a.length; i++) {
    let temp = a[i];
    j = i;

    while (j > 0 && a[j - 1] > temp) {
      a[j] = a[j - 1];
      j--;
    }
    a[j] = temp;
  }
  return a;
};

const array = [8, 6, 7, 5, 2, 3, 4, 1];
const result = insertionSort(array);
console.log(result);
