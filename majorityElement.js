function majorityElement(arr){
  let count = {}
  for(let i =0;i<arr.length;i++){
      if(count[arr[i]]){
        count[arr[i]]++
      }else{
           count[arr[i]]=1
      }
       if(count[arr[i]]>Math.floor(arr.length/2)){
            return arr[i]
     }
  }
  return "no one is major "
}
const arr= [3,2,3,2,2]
console.log("the major element is :",majorityElement(arr));