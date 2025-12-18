function minBitFlips(start, goal) {
    let xor = start ^ goal;
    let count = 0;

    while (xor > 0) {
        count += xor & 1;
        xor =xor>> 1;
    }

    return count;
}

// Examples
console.log(minBitFlips(10, 7)); // 3
console.log(minBitFlips(3, 4));  // 3
