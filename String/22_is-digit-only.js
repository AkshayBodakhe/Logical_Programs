
function checkIsDigit (str) {
    
    for(let i = 0; i < str.length; i++){
        if(str[i] < "0" || str[i] > "9"){
            return false
        }
    }
    return true
}

const string = "03984a23"
const result = checkIsDigit(string)
console.log(result)