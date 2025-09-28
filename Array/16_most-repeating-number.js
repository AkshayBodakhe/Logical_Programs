
function mostRepeatingNumber (arr) {
  let freq = {}

  for(let num of arr){
    freq[num] = (freq[num] || 0) +1
  }
  let mostRepeating = null
  let maxCount = 0

  for(let key in freq){
    if(freq[key] > maxCount){
        maxCount = freq[key]
        mostRepeating = Number(key)
    }
  }
  return {maxCount, mostRepeating}
}

const array = [1,2,2,2,4,4,5,5,6,7]
console.log(mostRepeatingNumber(array))