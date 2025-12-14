function checkIfPangram(sentence) {
  let freq = [];
  for (let i = 0; i < 26; i++) {
    freq[i] = 0;
  }
  for (let ch of sentence) {
    freq[ch - 'a']++;
  }
  for (let count of freq) {
    if (count === 0) return false;
  }
  return true;
}
// Example
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true
console.log(checkIfPangram("leetcode")); // false