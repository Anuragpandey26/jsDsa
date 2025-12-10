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

// it give the index
function twoSum(nums, target1) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
const nums=[2, 7, 11, 15]
const target1=9
console.log(twoSum(nums, target1)); 