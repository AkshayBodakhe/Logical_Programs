
const maximumInArray = (arr) => {
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

const minimumInArray = (arr) => {
    let min = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

const array = [1,2,3,4,5,6]

const max = maximumInArray(array)
const min = minimumInArray(array)

console.log(max)
console.log(min)