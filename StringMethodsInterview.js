// ==========================================
// Frequently Asked String Methods in Interviews
// ==========================================

const str = "  Hello, World! JavaScript is awesome.  ";
const word = "JavaScript";

// 1. split()
// Splits a string into an array of substrings based on a specified separator.
// Interview Question: "How do you reverse a string?" -> str.split('').reverse().join('')
const wordsArray = str.trim().split(" ");
const charsArray = word.split("");
console.log("1. split(): Words ->", wordsArray);
console.log("   split(): Characters ->", charsArray);


// 2. slice() vs substring()
// Both extract a portion of a string.
// slice() allows negative indices (counts from the end).
// substring() treats negative indices as 0.
const baseStr = "Frontend Development";
console.log("2. slice(0, 8):", baseStr.slice(0, 8)); // 'Frontend'
console.log("   slice(-11):", baseStr.slice(-11)); // 'Development'
console.log("   substring(0, 8):", baseStr.substring(0, 8)); // 'Frontend'
console.log("   substring(-11):", baseStr.substring(-11)); // 'Frontend Development' (treated as 0)


// 3. replace() / replaceAll()
// Returns a new string with some or all matches of a pattern replaced by a replacement.
const text = "apples are round, and apples are juicy.";
const replacedOne = text.replace("apples", "oranges"); // Replaces only first instance
const replacedAll = text.replaceAll("apples", "oranges"); // Replaces all instances
console.log("3. replace():", replacedOne);
console.log("   replaceAll():", replacedAll);


// 4. indexOf() / lastIndexOf()
// indexOf: Returns the index of the first occurrence of a specified text in a string. Returns -1 if not found.
// lastIndexOf: Returns the index of the last occurrence.
const searchStr = "hello world, hello universe";
console.log("4. indexOf('hello'):", searchStr.indexOf("hello")); // 0
console.log("   lastIndexOf('hello'):", searchStr.lastIndexOf("hello")); // 13
console.log("   indexOf('JS'):", searchStr.indexOf("JS")); // -1


// 5. includes()
// Returns true if a string contains a specified string, otherwise false. Case-sensitive.
console.log("5. includes('JavaScript'):", str.includes("JavaScript")); // true
console.log("   includes('javascript'):", str.includes("javascript")); // false


// 6. trim() / trimStart() / trimEnd()
// Removes whitespace from both ends of a string.
console.log("6. trim():", `'${str.trim()}'`);
console.log("   trimStart():", `'${str.trimStart()}'`);
console.log("   trimEnd():", `'${str.trimEnd()}'`);


// 7. toLowerCase() / toUpperCase()
// Converts the string to lower/upper case. Often used for case-insensitive comparisons.
// Interview Question: "How do you check if two strings are equal, ignoring case?"
const str1 = "Apple";
const str2 = "apple";
console.log("7. toLowerCase() comparison:", str1.toLowerCase() === str2.toLowerCase()); // true


// 8. charAt() / charCodeAt()
// charAt: Returns the character at a specified index.
// charCodeAt: Returns the Unicode of the character at a specified index.
console.log("8. charAt(0):", word.charAt(0)); // 'J'
console.log("   charCodeAt(0):", word.charCodeAt(0)); // 74


// 9. startsWith() / endsWith()
// Determines whether a string begins/ends with the characters of a specified string.
const fileName = "ArrayMethodsInterview.js";
console.log("9. startsWith('Array'):", fileName.startsWith("Array")); // true
console.log("   endsWith('.js'):", fileName.endsWith(".js")); // true


// Bonus: Reverse a string using split, reverse, join
const reversedWord = word.split('').reverse().join('');
console.log("Bonus: Reversed 'JavaScript' ->", reversedWord);
