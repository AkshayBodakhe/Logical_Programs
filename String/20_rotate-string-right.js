
function rotateStringRight (str , k) {
 let result = ""
 let n = str.length
 k = k % n
  // len 5 , k =2 then i = 5-2 = 3 
 for(let i = n - k; i < n; i++){
    result += str[i]
 }

 for(let i = 0; i < n-k ; i++){
     result += str[i]
 }
 return result
}

let str  = "ABCDE"
// let result = rotateStringRight(str,0)
// console.log(result)

result = rotateStringRight(str,1)
console.log(result)

result = rotateStringRight(str,2)
console.log(result)

result = rotateStringRight(str,3)
console.log(result)

result = rotateStringRight(str,4)
console.log(result)

result = rotateStringRight(str,5)
console.log(result)

result = rotateStringRight(str,6)
console.log(result)