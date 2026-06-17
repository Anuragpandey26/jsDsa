function DuplicateStr(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) { 
            // FIXED: Check if the character (str[j]) is already in the result
            if (str[i] === str[j] && !result.includes(str[j])) {
              result += str[j];
            }
        }
    }
    
    return result;
}
const str="ab"
console.log("the str has duplicate:",DuplicateStr(str));
function removeDuplicate(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) === -1){
            result += str[i];
        }
    }
    return result;
}
console.log(removeDuplicate("anurag"));

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

