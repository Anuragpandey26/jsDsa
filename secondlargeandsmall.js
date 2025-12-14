function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i]<largest) {
            secondLargest = arr[i];
        }
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i]>smallest) {
            secondSmallest = arr[i];
        }
    }
    return {
        secondLargest,
        secondSmallest
    };
}
console.log(findSecondLargestAndSmallest([12, 35, 1, 10, 34, 1]));
