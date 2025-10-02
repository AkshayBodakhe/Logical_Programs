
function removeDuplicate (str) {
   let seen = {}
   let result = ""
   for(let i = 0 ; i < str.length ; i++){
     if(!seen[str[i]]){
        result += str[i]
        seen[str[i]] = true
     }
   }
   return result
}

const array = "akshay bodakhe"
console.log(removeDuplicate(array))


