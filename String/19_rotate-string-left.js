
function rotateLeft (str,k) {
  let result = ""
  k = k % str.length // in case k > length
  for(let i = k; i < str.length; i++){
    result += str[i]
  }

  for(let i =0 ; i< k;i++){
    result += str[i]
  }
  return result
}

let str  = "ABCDE"
// let result = rotateLeft(str,0)
// console.log(result)

result = rotateLeft(str,1)
console.log(result)

result = rotateLeft(str,2)
console.log(result)

result = rotateLeft(str,3)
console.log(result)

result = rotateLeft(str,4)
console.log(result)

result = rotateLeft(str,5)
console.log(result)

result = rotateLeft(str,6)
console.log(result)

// if we give k more than string length then k = k % str.length
// ex = str.length = 5 & k = 7 then k = 7 % 5 = 2
// str.length = 5 & k = 2 then k = 2 % 5 = 5. 
// if we mod the k (2) with length of string (5) then we get same k i.e 2