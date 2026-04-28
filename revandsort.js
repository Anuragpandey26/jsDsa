//rev array
function ReverseArray(nums1){
    let res = []  //let rev=""
    for(let i=nums.length-1;i>=0;i--){
        res.push(nums[i]); // rev+=str[i]; for srting reverse
    }
    return res
}
const nums1=[1,2,3,4,5]
console.log(ReverseArray(nums2));

// rev string in array
function ReverseStr(arr) {
    let result = [];
    for (let word of arr) {
        let rev = '';
        for (let char of word){
            rev = char + rev;  
        }
        result.push(rev);
    }
    return result;
}
console.log(ReverseStr(["hello"]));

// sorting string
function sortString(str){
  let arr = [...str]; 
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sortString("dcba"));

// sorting in array in a string 
function sortStringInArray(arr) {
  let str = arr[0];      
  let chars = [...str];   
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length - 1; j++) {
      if (chars[j] > chars[j + 1]) {
        [chars[j], chars[j + 1]] = [chars[j + 1], chars[j]];
      }
    }
  }
  let sortedStr = "";
  for (let i = 0; i < chars.length; i++) {
    sortedStr += chars[i];
  }
  return [sortedStr];  
}
console.log(sortStringInArray(["bcda"])); 
