const longestSubstrWithoutRep = (string) => {
  let subStr = "";
  let maxLength = 0;
  let maxStr=""
  for (let i = 0; i < string.length; i++) {
    if (subStr.includes(string[i])) {
      maxLength = maxLength >= subStr.length ? maxLength : subStr.length;
    //   console.log(maxLength);
      maxStr=subStr
      subStr=subStr.slice(1)
      subStr += string[subStr.indexOf(string[i]+1)];
    } else {
      subStr += string[i];
    }
  }
  return {maxLength,maxStr};
};

console.log(longestSubstrWithoutRep("sucacess"));
