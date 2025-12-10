function arrayStringsAreEqual(arr1,arr2){
  let str1=arr1.join("");
  let str2=arr2.join("");
  let str3=str2;
  let str4=str1;
  if(str3===str4){
      return true;
  }else{
      return false;
  }
}
const arr1= ["a","bc"];
const arr2= ["ab","c"];
console.log("the which give the sum is :",arrayStringsAreEqual(arr1,arr2));