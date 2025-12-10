function FindMissing(arr){
   let n = arr.length ;
  let realsum = Math.floor(n*(n+1)/2);
   let actualsum = 0
   for(let i =0; i<arr.length;i++){
       actualsum+=arr[i];
   }
   return realsum-actualsum
 }
 const arr= [9,6,4,2,3,5,7,0,1]
 console.log("the missing number is ",FindMissing(arr));


