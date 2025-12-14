function checkIfPangram(sentence) {
  let seen = new Set();
  for (let ch of sentence) {
    seen.add(ch); // add each letter to the set
  }
  return seen.size === 26; // true if all 26 letters are present
}
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram("leetcode")); // false
