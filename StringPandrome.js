function IsPandrome(str){
    let original = str;
   let result =""
   for(let i=str.length-1;i>=0;i--){
       result+=str[i]
   }
    return original===result
}
const str="aaa"
console.log("these the pandrome string:",IsPandrome(str));