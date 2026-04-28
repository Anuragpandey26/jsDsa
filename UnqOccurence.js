function firstUniqChar(str){
    let freq={}
    for(let i =0;i<str.length;i++){
        if(freq[str[i]]){
            freq[str[i]]++;
        }else{
            freq[str[i]]=1;
        }
    }
    for(char of str){
      if(freq[char]===1)  
       return char
    }
    return null
}
console.log(firstUniqChar("leetcode"));