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