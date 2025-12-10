function DecimalToBinary(num){
     let binary = 0;
     let place = 1;
    while (num>0){
        let digit = num%2;
        binary=binary+digit*place;
        place=place*10;
        num = Math.floor(num/2);
    }
    return binary 
}
console.log("the binary representation is:",DecimalToBinary(10));


function BinaryToDecimal(num){
     let decimal = 0;
     let i =0;
    while (num>0){
        let digit = num%10;
        decimal = decimal + digit*Math.pow(2,i)
         i++;
        num = Math.floor(num/10);
    }
    return decimal
}
console.log("the decimal representation is:",BinaryToDecimal(1000));

