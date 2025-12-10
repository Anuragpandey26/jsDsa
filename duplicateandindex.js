// input str1="abcd" str2="bcde" output str3="abbccdde"
function MergeStr(str1,str2){ 
    let result=""
    let i=0;
    while(i<str1.length||i<str2.length){
        if(i<str1.length){
            result+=str1[i]
        }
        if(i<str2.length){
            result+=str2[i]
        }
        i++;
    }
    return result
}
let str1="abcd";
let str2="bcde";
console.log("the merge string is :",MergeStr(str1,str2));//output:abbccdde

function mergeStrings(str1, str2) {
  return str1 + str2;
}

console.log(mergeStrings("abc", "def")); // Output: abcdef

function CountZeroes(arr1){
    let count = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]===0)count++;
    }
    return count
}
const arr1=[1,0,0,0,0,2]
console.log("count the zero :",CountZeroes(arr));


function FindSubString(str,sub){
    if(str.includes(sub)){
        return true;
    }else{
        return false;
    }
}
const str="Anurag"
const sub="ddd"
console.log("the sub string :",FindSubString(str,sub));

function FindDuplicate(arr2){
    let Duplicate =[]
    for(let i =0;i<arr.length;i++){
       for(let j=i+1;j<arr.length;j++){
           if(arr[i]===arr[j]&&!Duplicate.includes(arr[j])){
               Duplicate.push(arr[j])
           }
       }
    }
    return Duplicate.length ? Duplicate : "no duplicate element";
}
const arr2=[1,3,3,4,5,6,6,7,8]
console.log("the duplicate array is :",FindDuplicate(arr))

function RemoveArray(arr){
   arr.sort((a,b)=>a-b)
   let unq=0;
   for(let i =0;i<arr.length;i++){
       if(arr[i]<arr[i+1]){//[1,2,3,4,4,5,6]
           arr[unq]=arr[i]
           unq++;
       }
   }
   arr.length=unq;
   return arr;
}
const arr = [2,3,4,4,5,6,1]
console.log("the array is :",RemoveArray(arr));



const arr8= [1, 2, 3, 4];
const arr7 = [6, 7, 5];
function mergeTwoSorted(arr1, arr2) {
    let i = 0, j = 0;
    const result = [];
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    while (i < arr1.length) result.push(arr1[i++]);
    while (j < arr2.length) result.push(arr2[j++]);
    
    return result;
}

console.log(mergeTwoSorted(arr7, arr8)); // [1, 2, 3, 4, 5, 6, 7]