function DuplicateStr(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) { 
            // FIXED: Check if the character (str[j]) is already in the result
            if (str[i] === str[j] && !result.includes(str[j])) {
              result += str[j];
            }
        }
    }
    
    return result;
}
const str="ab"
console.log("the str has duplicate:",DuplicateStr(str));


function removeDuplicate(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) === -1){
            result += str[i];
        }
    }
    return result;
}
console.log(removeDuplicate("anurag"));