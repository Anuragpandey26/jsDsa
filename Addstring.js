function AddString (str1,str2){
    let i=str1.length-1;
    let j=str2.length-1;
    let carry =0;
    let result = "";
    while(i>=0||j>=0||carry>0){
        const num1= i>=0? Number(str1[i]):0
        const num2= j>=0? Number(str2[j]):0
        const sum = num1+num2+carry
        carry=Math.floor(sum/10);
        result=(sum%10)+result;
        i--;
        j--;
    }
    return result ;
}
let str1="11"
let str2="134"
console.log("the sum is ",AddString (str1,str2));