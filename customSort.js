// Question 1: Sort by 'a' larger to smaller and 'b' from smaller to larger.
// Constraint: Do not use any inbuilt function.

function customSort(arr) {
    // Create a copy of the array manually to avoid modifying the input array
    const sorted = [];
    for (let i = 0; i < arr.length; i++) {
        sorted[i] = arr[i];
    }
    
    // Implement bubble sort from scratch
    for (let i = 0; i < sorted.length - 1; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            const current = sorted[j];
            const next = sorted[j + 1];
            
            let swapNeeded = false;
            
            // 1. Sort by 'a' larger to smaller (descending)
            if (current.a < next.a) {
                swapNeeded = true;
            } 
            // 2. If 'a' values are equal, sort by 'b' smaller to larger (ascending)
            else if (current.a === next.a) {
                if (current.b > next.b) {
                    swapNeeded = true;
                }
            }
            
            if (swapNeeded) {
                // Swap elements manually
                const temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
            }
        }
    }
    
    return sorted;
}

// Test case
const x = [{a: 1, b: 3}, {a: 2, b: 2}, {a: 3, b: 1}];
console.log("Original:", x);
console.log("Sorted:", customSort(x));
