function uniqueOccurrences(arr) {
    const freq = {};
    for (let i = 0; i < arr.length; i++){
        if (freq[arr[i]]) {
            freq[arr[i]]++;
        } else {
            freq[arr[i]] = 1;
        }
    }
    const countSeen = {};
    for (let key in freq) {
        let count = freq[key];          
        if (countSeen[count]) {
            return false;               
        } else {
            countSeen[count] = true;     
        }
    }
    return true;  
}
console.log(uniqueOccurrences([1,2,2,1,1,3]));