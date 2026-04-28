const arr1=[1,2,3,4,5]

function Perfix_sum(arr){
    for(let i=arr1.length-1-1; i<0; i--){  //for (let i = arr.length - 2; i >= 0; i--)
        arr1[i]=arr1[i+1]+ arr1[i]
    }
    return arr1;
}
console.log(Perfix_sum(arr1))
