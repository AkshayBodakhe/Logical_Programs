const insertAtIndex = (arr, ele, index) => {
  if (index < 0 || index > arr.length) {
    console.log("Index out of bound");
    return arr;
  }
  const newArr = []
  for (let i = 0; i <= arr.length; i++) {
    if (i < index) {
       newArr[i] = arr[i]
    } else if(i === index){
       newArr[i] = ele
    } else {
      newArr[i] = arr[i - 1]
    }
  }
  return newArr
};


const array = [1,2,3,4,5]
const result = insertAtIndex(array,6,4)
console.log(result)