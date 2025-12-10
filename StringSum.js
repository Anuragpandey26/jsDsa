function SumString(str){
    let sum=0;
    for(let i =0;i<str.length;i++){
       sum+=Number(str[i]);
    }
   return sum.toString()
}
const str="123456"
console.log(typeof SumString(str));