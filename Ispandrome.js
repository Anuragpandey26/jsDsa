function IsPandrome(num){
    const original = num ;
    let reverse = 0;
    while(num > 0){
        let digit = num %10;
       reverse = reverse*10+digit;
       num = Math.floor(num /10);
    }
    return original === reverse? "palindrome" : "not palindrome";
}
console.log("the number is :",IsPandrome(181));