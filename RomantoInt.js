function romanToInt(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = roman[s[i]];
    const next = i + 1 < s.length ? roman[s[i + 1]] : 0;
    if (curr < next) {
      result -= curr;
    } else {
      result += curr;
    }
  }
  return result;
}
const s ='III'
console.log(romanToInt(s));