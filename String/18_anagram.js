
const areAnagrams = (str1, str2) => {
  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for(let i = 0; i < str2.length; i++){
    let char = str1[i];
    if(!charCount[char]) return false
    charCount[char]--
  }
  return true
};

console.log(areAnagrams("listen", "silents"));
