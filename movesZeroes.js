function MovesZeroes(arr){
    let left=0;
    for(let right=0;right < arr.length; right++){
        if(arr[right]!==0){
            let temp =arr[right]
            arr[right]=arr[left]
            arr[left]=temp
            left++
        }
    }
    return arr;
}  
const arr=[0,0,1,2,0,3]
console.log(MovesZeroes(arr));