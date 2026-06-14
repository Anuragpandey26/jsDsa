function getUnionSortedFast(arr1, arr2) {
   let seen =[];
   let unionArr=[];
   for(let i =0;i<arr1.length;i++){
       let currentNumber=arr1[i];
       if(!seen[currentNumber])
       {
           seen[currentNumber]=true;
          unionArr.push(currentNumber);
       }
   }
    for(let i =0;i<arr2.length;i++){
       let currentNumber=arr2[i];
       if(!seen[currentNumber])
       {
           seen[currentNumber]=true;
           unionArr.push(currentNumber);
       }
   }
   for(let i=0;i<unionArr.length-1;i++){
       for(let j=0; j<unionArr.length-i-1;j++){
           if(unionArr[j]>unionArr[j+1]){
               let temp;
               temp=unionArr[j];
               unionArr[j]=unionArr[j+1];
               unionArr[j+1]=temp;
           }
       }
   }
   return unionArr
} 

let arr1 = [1, 2, 3, 4, 5, 2];
let arr2 = [4, 5, 6, 7, 8, 1];

console.log(getUnionSortedFast(arr1, arr2)); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8]