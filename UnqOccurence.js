function firstUniqChar(str) {
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }
        if (count === 1) {
            return i;
        }
    }
    return -1; 
}
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("aabb"));