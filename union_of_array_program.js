function getUnionSorted(arr1, arr2) {
    let unionArr = [];
    let count = 0;

    // Step 1: Union logic
    for (let i = 0; i < arr1.length; i++) {
        let isPresent = false;
        for (let j = 0; j < count; j++) {
            if (unionArr[j] === arr1[i]) {
                isPresent = true;
                break;
            }
        }
        if (!isPresent) {
            unionArr[count] = arr1[i];
            count++;
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let isPresent = false;
        for (let j = 0; j < count; j++) {
            if (unionArr[j] === arr2[i]) {
                isPresent = true;
                break;
            }
        }
        if (!isPresent) {
            unionArr[count] = arr2[i];
            count++;
        }
    }

    // Step 2: Sort unionArr (Bubble Sort)
    for (let i = 0; i < count - 1; i++) {
        for (let j = 0; j < count - i - 1; j++) {
            if (unionArr[j] > unionArr[j + 1]) {
                let temp = unionArr[j];
                unionArr[j] = unionArr[j + 1];
                unionArr[j + 1] = temp;
            }
        }
    }

    return unionArr;
}

let array1 = [1, 2, 3, 4, 5, 2];
let array2 = [4, 5, 6, 7, 8, 1];

console.log(getUnionSorted(array1, array2));
