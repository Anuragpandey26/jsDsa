function sortSentence(s) {
    let ans = "";
    let temp = [];   // dynamic array
    let word = "";
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {        // digit found
            temp[s[i]] = word + " ";
            word = "";
            i++;                  // skip the space after digit
        } else {
            word += s[i];
        }
    }
    for (let str of temp) {
        if (str) ans += str;      // avoid undefined values
    }
    return ans.trim();            // remove trailing space
}
// Example
console.log(sortSentence("is2 sentence4 This1 a3"));
// Output: "This is a sentence"