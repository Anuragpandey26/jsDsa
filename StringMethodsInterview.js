// You are building a User Profile Validator for a registration form. 
// You receive a raw user input string and a filename.
//  Using the data below, perform all operations using each method exactly once.

// ==========================================
// String Methods - User Profile Validator
// ==========================================

const rawInput  = "  anurag sharma  ";   // user typed name with extra spaces
const bio       = "i love javascript. javascript is awesome.";
const password  = "MySecret@123";
const fileName  = "profile_anurag.jpg";
const userId    = "USR-4829-XYZ";


// 1. trim() — clean the raw name input
const cleanName = rawInput.trim();
console.log(cleanName); // "anurag sharma"


// 2. split() — separate first and last name
const [firstName, lastName] = cleanName.split(" ");
console.log(firstName); // "anurag"
console.log(lastName);  // "sharma"


// 3. toUpperCase() / toLowerCase() — format name + case-insensitive check
const displayName = firstName.toUpperCase();
console.log(displayName); // "ANURAG"

const input = "mysecret@123";
console.log(password.toLowerCase() === input.toLowerCase()); // true


// 4. replace() / replaceAll() — fix bio text
const fixedBio = bio.replaceAll("javascript", "JavaScript");
console.log(fixedBio);
// "i love JavaScript. JavaScript is awesome."

const shortBio = fixedBio.replace("i love", "I love");
console.log(shortBio);
// "I love JavaScript. JavaScript is awesome."


// 5. includes() — check if bio mentions JavaScript
const hasJS = shortBio.includes("JavaScript");
console.log(hasJS); // true

const hasSpecial = password.includes("@");
console.log(hasSpecial); // true


// 6. indexOf() / lastIndexOf() — find positions in userId
console.log(userId.indexOf("-"));      // 3  → first dash position
console.log(userId.lastIndexOf("-"));  // 8  → last dash position
console.log(userId.indexOf("ABC"));    // -1 → not found


// 7. slice() / substring() — extract parts of userId
const prefix = userId.slice(0, 3);     // "USR"
const code   = userId.slice(-3);       // "XYZ"  (negative = from end)
const number = userId.substring(4, 8); // "4829" (no negatives)
console.log(prefix, code, number);     // "USR"  "XYZ"  "4829"


// 8. startsWith() / endsWith() — validate fileName format
const isValidName = fileName.startsWith("profile_");
const isImage     = fileName.endsWith(".jpg");
console.log(isValidName); // true
console.log(isImage);     // true
console.log(isValidName && isImage ? "Valid file" : "Invalid file"); // "Valid file"


// 9. charAt() / charCodeAt() — inspect first character of userId
console.log(userId.charAt(0));      // "U"
console.log(userId.charCodeAt(0));  // 85  (Unicode of "U")

const charCode = cleanName.charCodeAt(0);
console.log(charCode >= 65 && charCode <= 122); // true → valid name start


// Bonus — reverse a string (split + reverse + join)
const reversed = firstName.split("").reverse().join("");
console.log(reversed); // "garuna"


// ==========================================
// Cheatsheet
// ==========================================

// method              | what it does                        | returns
// --------------------|-------------------------------------|----------
// trim()              | removes spaces from both ends       | new string
// split(sep)          | breaks string into array            | array
// toUpperCase/Lower() | changes case                        | new string
// replace(a, b)       | replaces first match only           | new string
// replaceAll(a, b)    | replaces all matches                | new string
// includes(str)       | checks if string exists inside      | true/false
// indexOf(str)        | first position of match, -1 if none | number
// lastIndexOf(str)    | last position of match              | number
// slice(start, end)   | cuts string, allows negative index  | new string
// substring(s, e)     | cuts string, no negative index      | new string
// startsWith(str)     | checks beginning                    | true/false
// endsWith(str)       | checks ending                       | true/false
// charAt(i)           | character at index                  | character
// charCodeAt(i)       | unicode number at index             | number