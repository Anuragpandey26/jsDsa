// it give the element 
function TwoSum(arr,target){
    arr.sort((a,b)=>a-b);
    let right=arr.length-1;
    let left=0;
    while(left<right){
        let sum=arr[left]+arr[right]
        if(sum===target)
        {
            return [arr[left],arr[right]];
            // return [left,right]; // if need only index
        }
        else if(sum>target)
        {
            right--;
        }
        else
        {
            left++;
        }
    }
    return "not getting target"
}
const arr = [1,3,4,5,8,7];
const target=50
console.log("the which give the sum is :",TwoSum(arr,target));
