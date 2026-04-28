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
    for (let key in freq) {
        if (freq[key] === 1) {
            // Note: Object keys are always strings, so we convert back to Number
            result.push(Number(key)); 
        }
    }
    return result;
}
console.log(uniqueElementsOnly([1,1,2,3,3,4]));