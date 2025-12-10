function runningSum(arr){
     for(let i =1;i<arr.length;i++){
         arr[i]=arr[i]+arr[i-1]
     }
     return arr;
}  
const arr = [1,2,3,4,5]
console.log(runningSum(arr));