
// Program to calculate Mean, Median, and Mode without using high-level built-in functions

function calculateStats(arr) {
    let n = arr.length;

    // 1. Calculate Mean
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    let mean = sum / n;

    // 2. Sort the array (Bubble Sort) for Median
    // We create a copy to avoid modifying the original array logic if passed by reference matters, 
    // but here we can just sort the input array or a local copy. 
    // Let's manually copy it first to be safe.
    let sortedArr = [];
    for (let i = 0; i < n; i++) {
        sortedArr[i] = arr[i];
    }

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }

    // 3. Calculate Median
    let median;
    if (n % 2 !== 0) {
        // Odd number of elements
        let mid = (n - 1) / 2; // integer division equivalent since n is odd
        median = sortedArr[mid];
    } else {
        // Even number of elements
        let mid1 = n / 2;
        let mid2 = mid1 - 1;
        median = (sortedArr[mid1] + sortedArr[mid2]) / 2;
    }

    // 4. Calculate Mode
    let frequency = {};
    let maxFreq = 0;
    let mode = [];

    for (let i = 0; i < n; i++) {
        let num = arr[i];
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }

        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    }

    // Collect all elements with max frequency
    // (There can be multiple modes)
    // We have to iterate through the keys. 
    // Since we avoid built-ins like Object.keys, we can iterate the array again 
    // or assume we can iterate the object with for...in

    // Let's use for...in which is a clear language feature
    for (let key in frequency) {
        if (frequency[key] === maxFreq) {
            // key is string in for..in, convert back to number
            // simple conversion
            mode[mode.length] = Number(key);
        }
    }

    return {
        mean: mean,
        median: median,
        mode: mode // returning array as there could be multimodal
    };
}

let data = [1, 2, 3, 4, 5, 5, 2];
console.log("Data:", data);

let stats = calculateStats(data);
console.log("Mean:", stats.mean.toFixed(4));
console.log("Median:", stats.median);
console.log("Mode:", stats.mode);
