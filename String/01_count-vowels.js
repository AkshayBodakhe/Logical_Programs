
const countVowels = (str) => {
   let count = 0;
   let vowels = new Set("aeiou")
   for(let char of str){
     if(vowels.has(char.toLowerCase())){
        count++
     }
   }
   return count
}

const countVowels2= (str) => {
   let count = 0;
   let vowels = new Set("aeiou")
   let freq = {}
   for(let char of str){
     if(vowels.has(char.toLowerCase())){
        freq[char] = (freq[char] || 0) + 1
        count++
     }
   }
   return freq
}


const string = "aeiousdfghae₹"
console.log(countVowels(string))