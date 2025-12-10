function uniqueElementsOnly(arr){
    const freq = {};
    const result = [];
    for (let i =0;i<arr.length;i++ ) {
        if(freq[arr[i]]){
            freq[arr[i]]++;
        }else{
             freq[arr[i]]=1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]] === 1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(uniqueElementsOnly([1,1,2,3,3,4]));