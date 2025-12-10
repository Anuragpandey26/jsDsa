function isPrime(num){
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("the number is :", isPrime(2));
console.log("the number is :", isPrime(99));
// prime in the array 
function primeFinder(arr) {
  const primes = [];                     
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num <= 1) continue;              
    let isPrime = true;                 
    for (let j = 2; j < num; j++){     
      if (num % j === 0) {               
         isPrime=false;
        break;      
      }
    }
    if (isPrime) {
      primes.push(num);                  
    }
  }
  return primes;                    
}
console.log(primeFinder([1, 2, 3, 4, 5]));     

