//rev array
function ReverseArray(nums1){
    let res = []
    for(let i=nums.length-1;i>=0;i--){
        res.push(nums[i]);
    }
    return res
}
const nums1=[1,2,3,4,5]
console.log(ReverseArray(nums2));

//sorting array
function SortingArray(nums){
    for(let i =0;i<nums.length;i++){
      for(let j =0;j<nums.length;j++){
        if(nums[j]>nums[j+1]){
            [nums[j+1],nums[j]]=[nums[j],nums[j+1]]
        }
      }
    }
    return nums2
}
const nums2=[1,3,5,2,4]
console.log(SortingArray(nums));
//rev string
function ReverseStr(str){
 let rev=""
  for (let i=str.length-1;i>=0;i--){
     rev+=str[i];
  }
  return rev
}
console.log(ReverseStr("hello"))

// rev string in array
function ReverseStr(arr){
   let rev=[]
   for(let i=arr.length-1;i>=0;i--){
       rev.push(arr[i].split('').reverse().join(''));
   }
   return rev
}
console.log(ReverseStr(["hello"]))

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
