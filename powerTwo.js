function isPowerOfTwo(num) {
    if (num <= 0) return false;
    while (num > 1) {
        if (num % 2 !== 0) {
            return false; 
        }
        num = Math.floor(num / 2); 
    }
    return num === 1;  
}
console.log(isPowerOfTwo(8));  
console.log(isPowerOfTwo(6));  
console.log(isPowerOfTwo(7));  
console.log(isPowerOfTwo(0)); 


function isPowerOfTwo(num) {
    if (num <= 0) return false;
    return (num&(num-1))===0
}
console.log(isPowerOfTwo(8));  
console.log(isPowerOfTwo(6));