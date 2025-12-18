function AddString (str1,str2){
     let i =str1.length-1;
     let j =str2.length-1;
     let carry=0
     let res=""
     while(i>=0||j>=0||carry){
         let sum =0
         if(i>=0) sum+=str1[i--]-'0'
         if(j>=0) sum+=str2[j--]-'0'
         res=sum%10+res
         carry=Math.floor(sum/10)
     }
     return res
}
let str1="11"
let str2="134"
console.log("the sum is ",AddString (str1,str2));