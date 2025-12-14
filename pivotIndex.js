function pivotIndex(nums) {
    const n = nums.length;
    let leftsum = 0;
    let totalsum = 0;

    if (n === 1) return 0;

    // calculate total sum
    for (let i = 0; i < n; i++) {
        totalsum += nums[i];
    }

    // find pivot index
    for (let i = 0; i < n; i++) {
        let rightsum = totalsum - leftsum - nums[i];

        if (leftsum === rightsum) {
            return i;
        }

        leftsum += nums[i];
    }

    return -1;
}

// Examples
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3]));        // -1
console.log(pivotIndex([2, 1, -1]));       // 0
