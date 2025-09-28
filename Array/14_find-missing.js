// this program will only work for single missing number
// XOR is another way to solve this problem which needs to be understand ( to do later )

const findMissing = (arr) => {
    let n = arr.length
    let expectedSum = ((n+1) * (n+2)) / 2
    let actualSum = arr.reduce((sum,num) => sum+num ,0) // 0 is initial value
    return expectedSum - actualSum;
}

const array = [1,2,3,5,4,7,9]
console.log(findMissing(array))


// expected sum = n * (n+1) / 2
// actual sum = sum of array
// missing = expected sum - actual sum


// in multiple missing number it is expected to get a final length of array which is not much asked