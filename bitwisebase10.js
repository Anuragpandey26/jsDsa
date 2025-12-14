function bitwiseComplement(n) {
    if (n === 0) return 1;

    let mask = 0;
    let temp = n;

    while (temp > 0) {
        mask = (mask << 1) | 1;
        temp = temp >> 1;
    }

    return n ^ mask;
}
// Examples
console.log(bitwiseComplement(5));  // 2
console.log(bitwiseComplement(7));  // 0
console.log(bitwiseComplement(10)); // 5
