// Hashing with Set (O(n)) ✅ Best in JS
// Use a Set to track seen numbers.
// If a number is already seen, add it to duplicates.

const findDuplicates = (arr) => {
  let seen = new Set();
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      duplicates.add(arr[i]);
    } else {
      seen.add(arr[i]);
    }
  }
  return duplicates;
};

const array = [1,2,4,4,5,5,6,7]
console.log(findDuplicatesFreq(array))

// Frequency Count (O(n))
// Use an object (hashmap) to count occurrences

function findDuplicatesFreq (arr) {
    let freq = {}
    let duplicates = []
    for(let num of arr){
        freq[num] = (freq[num] || 0) + 1
    }
    for(let key in freq){
        if(freq[key] > 1){
            duplicates.push(Number(key))
        }
    }
    console.log(freq)
    return duplicates
}