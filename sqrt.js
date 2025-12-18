function mySqrt(x) {
    if (x < 2) return x;

    let left = 1, right = x, ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (mid * mid <= x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}

// Example usage
console.log(mySqrt(8));  // 2
console.log(mySqrt(16)); // 4
console.log(mySqrt(0));  // 0
console.log(mySqrt(1));  // 1

function mySqrt(x) {
    if (x === 0 || x === 1) return x;

    let i = 1;

    while (i * i <= x) {
        i++;
    }

    return i - 1;
}
// Example usage
console.log(mySqrt(8));  // 2
console.log(mySqrt(16)); // 4
console.log(mySqrt(0));  // 0
console.log(mySqrt(1));  // 1