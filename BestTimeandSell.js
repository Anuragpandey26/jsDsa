function maxProfit(price){
     let buy=price[0];
     let profit=0;
     for(let i =0;i<price.length;i++){
         if(buy>price[i]){
             buy= price[i];
         }else if(price[i]-buy>profit){
             profit=price[i]-buy;
         }
     }
     return profit;
}  
const price = [1,2,3,4,5,6]
console.log(maxProfit(price));