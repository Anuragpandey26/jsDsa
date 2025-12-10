function gcd(a, b) {
    if (b === 0) return a;
    if (a === 0) return b;
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    return a * b/ gcd(a, b);
}
console.log("the gcd is :",gcd(48,18));
console.log("the lcm is :" ,lcm(48,18));

 