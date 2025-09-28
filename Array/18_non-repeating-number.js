
function nonRepeatingNumber (arr) {
    let freq = {}
    let result = []
    for(let num of arr){
        freq[num] = (freq[num] || 0) + 1
    }
    
    for(let key in freq){
        if(freq[key] <= 1){                    // this code will only keep those which appears once         
            result[result.length] = Number(key)
        }
    }
    return result
}

const array = [1,2,4,4,5,5,6,7]
console.log(nonRepeatingNumber(array))