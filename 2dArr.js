function to2DArray(arr, cols) {
    const result = [];
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);  // add element to current row

        if (temp.length === cols) {
            result.push(temp); // row is full, push to result
            temp = [];         // start a new row
        }
    }

    // push remaining elements if any
    if (temp.length > 0) {
        result.push(temp);
    }

    return result;
}

// Example usage
const arr1D = [1, 2, 3, 4, 5, 6, 7];
const cols = 3;
console.log(to2DArray(arr1D, cols));
