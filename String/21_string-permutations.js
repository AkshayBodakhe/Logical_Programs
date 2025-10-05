function uniquePermutations(str) {
  const result = new Set(); // to store unique permutations

  function permute(prefix, remaining) {
    if (remaining.length === 0) {
      result.add(prefix); // permutation complete
      return;
    }
    console.log("prefix",prefix)
    for (let i = 0; i < remaining.length; i++) {
      // choose character at i
      const newPrefix = prefix + remaining[i];
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
    //   console.log(i, "newPrefix-->", newPrefix);
    //   console.log(i, "newRemaining-->", newRemaining);
    //   if(newRemaining.length === 0){
    //     console.log("--------")
    //   }
      permute(newPrefix, newRemaining);
    }
  }

  permute("", str);
  return Array.from(result); // convert Set to Array
}

// Example:
const str = "ABC";
const perms = uniquePermutations(str);
console.log(perms);
console.log("Total unique permutations:", perms.length);
