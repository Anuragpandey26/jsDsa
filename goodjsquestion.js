function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0; 
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    } 
    return count;
}
console.log(countVowels("banana")); // Output: 3
console.log(countVowels("Hello World")); // Output: 3

// Iterative Factorial
function factorialIterative(n){
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result*i;
    }
    return result;
}
console.log(factorialIterative(5)); 

// 4. Fibonacci Series (First n numbers)
// Iterative Fibonacci
function fibonacci(n) {
  let a = 0, b = 1;
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];   
  }
  return result;
}
console.log(fibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
function greet(fullName) {
  const firstName = fullName.split(" ")[0].toUpperCase();
  return `Hey good morning ${firstName}`;
}
console.log(greet("anurag kumar Pandey"));


// count sentence 
function countSentence(str) {
    const countsent={}
    for(char of str){
        if(countsent[char]){
            countsent[char]+=1;
        }else{
            countsent[char]=1
        }
    }
    return countsent
}
console.log(countSentence("banana")); 