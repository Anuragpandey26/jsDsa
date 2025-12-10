function isArmstrong(num){
    let original = num;
    let sum = 0;
    let digits = 0;
    let temp = num;
    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }
    temp = original;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === original;
}
console.log("these is armstrong or not:",isArmstrong(153));