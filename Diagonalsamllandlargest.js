function findDiagonalMinMax(matrix) {
    const n = matrix.length;
    let leftMax = -Infinity, leftMin = Infinity;
    let rightMax = -Infinity, rightMin = Infinity;
    for (let i = 0; i < n; i++) {
        const leftElement = matrix[i][i];
        const rightElement = matrix[i][n - 1 - i];
        if (leftElement > leftMax) leftMax = leftElement;
        if (leftElement < leftMin) leftMin = leftElement;
        if (rightElement > rightMax) rightMax = rightElement;
        if (rightElement < rightMin) rightMin = rightElement;
     }
    return {
        leftDiagonal: {
            largest: leftMax,
            smallest: leftMin
        },
        rightDiagonal: {
            largest: rightMax,
            smallest: rightMin
        }
    };
}
const matrix = [
    [5,  2,  3],
    [4,  1,  6],
    [7,  8,  9]
];
const result = findDiagonalMinMax(matrix);
console.log("Results:");
console.log("Left Diagonal:");
console.log("  Largest :", result.leftDiagonal.largest);
console.log("  Smallest:", result.leftDiagonal.smallest); 
console.log("Right Diagonal:");
console.log("  Largest :", result.rightDiagonal.largest);  
console.log("  Smallest:", result.rightDiagonal.smallest); 