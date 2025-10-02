
const checkEvenOdd = (number) => {
    if(typeof number !== "number" || Number.isNaN(number)){
        return "value is not a number"
    }
    if(number % 2 === 0){
        return `${number} is even`
    } else {
        return `${number} is odd`
    }
}


const number = NaN
const result = checkEvenOdd(number)
console.log(result)