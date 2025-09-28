
const sumOfAllElements = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length ; i++){
      sum = sum + arr[i]
    }
    return sum
}

const array = [1,2,3]
const result = sumOfAllElements(array)
console.log(result)