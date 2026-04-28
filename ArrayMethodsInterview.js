// ==========================================
// Frequently Asked Array Methods in Interviews
// ==========================================

const numbers = [1, 2, 3, 4, 5];
const names = ['Alice', 'Bob', 'Charlie', 'David'];

// 1. map()
// Creates a new array populated with the results of calling a provided function on every element.
// Interview Question: "How do you double all numbers in an array?"
const doubled = numbers.map(num => num * 2);
console.log("1. map(): Doubled numbers ->", doubled); // [2, 4, 6, 8, 10]


// 2. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
// Interview Question: "How do you get only the even numbers from an array?"
const evens = numbers.filter(num => num % 2 === 0);
console.log("2. filter(): Even numbers ->", evens); // [2, 4]


// 3. reduce()
// Executes a reducer function on each element, resulting in a single output value.
// Interview Question: "How do you find the sum of all elements in an array?"
const sum = numbers.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
console.log("3. reduce(): Sum of numbers ->", sum); // 15


// 4. forEach()
// Executes a provided function once for each array element. (Returns undefined, doesn't chain)
console.log("4. forEach(): Logging names...");
names.forEach(name => console.log(`   - ${name}`));


// 5. find()
// Returns the FIRST element in the provided array that satisfies the provided testing function.
// Interview Question: "Find the first number greater than 3."
const firstGreaterThanThree = numbers.find(num => num > 3);
console.log("5. find(): First number > 3 ->", firstGreaterThanThree); // 4


// 6. some()
// Tests whether AT LEAST ONE element in the array passes the test. Returns a boolean.
const hasNegative = numbers.some(num => num < 0);
console.log("6. some(): Has negative number? ->", hasNegative); // false


// 7. every()
// Tests whether ALL elements in the array pass the test. Returns a boolean.
const allPositive = numbers.every(num => num > 0);
console.log("7. every(): Are all numbers positive? ->", allPositive); // true


// 8. sort()
// Sorts the elements of an array IN PLACE and returns the sorted array. 
// NOTE: By default, it converts elements to strings and compares their UTF-16 code units.
const unsortedNumbers = [10, 5, 20, 2];
const ascending = [...unsortedNumbers].sort((a, b) => a - b);
const descending = [...unsortedNumbers].sort((a, b) => b - a);
console.log("8. sort(): Ascending ->", ascending); // [2, 5, 10, 20]
console.log("   sort(): Descending ->", descending); // [20, 10, 5, 2]


// 9. flat()
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Interview Question: "How do you flatten a nested array?"
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray1 = nestedArray.flat(1); // depth 1
const flatArray2 = nestedArray.flat(Infinity); // completely flat
console.log("9. flat(): Depth 1 ->", flatArray1); // [1, 2, 3, 4, [5, 6]]
console.log("   flat(): Infinity ->", flatArray2); // [1, 2, 3, 4, 5, 6]


// 10. slice() vs splice() - VERY COMMON INTERVIEW QUESTION
// slice(): Returns a shallow copy of a portion of an array into a new array. DOES NOT mutate original.
const sliced = names.slice(1, 3); 
console.log("10a. slice(1, 3): ->", sliced); // ['Bob', 'Charlie']
console.log("     Original array after slice:", names); // Unchanged

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements. MUTATES original.
const namesCopy = [...names];
const spliced = namesCopy.splice(1, 2, 'Zack'); // Start at index 1, remove 2 items, insert 'Zack'
console.log("10b. splice(): Removed items ->", spliced); // ['Bob', 'Charlie']
console.log("     Array after splice (Mutated):", namesCopy); // ['Alice', 'Zack', 'David']
