function romanToInt(s) {
  const roman = {
    I: 1, V: 5, X: 10,
    L: 50, C: 100, D: 500, M: 1000
  };
  let result = 0;
  let prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let curr = roman[s[i]];
    if (curr < prev) {
      result -= curr;
    } else {
      result += curr;
    }
    prev = curr;
  }
  return result;
}
const s ='III'
console.log(romanToInt(s));