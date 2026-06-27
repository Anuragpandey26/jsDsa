let s = "I LOVE JS ";
let count = 0;
for (let i = 0; i < s.length; i++) {
    // Check if the current character is NOT a space
    if (s[i] !== " ") {
        // If it's the very first character (i === 0) 
        // OR if the character right before it was a space... it's a new word!
        if (i === 0 || s[i - 1] === " ") {
            count++;
        }
    }
}
console.log(count); 
// Output: 3

// Another Way and Easy Way 
let s="I LOVE JS "
const arr = s.trim().split(" ");
console.log(arr.length)
// Output: 3
