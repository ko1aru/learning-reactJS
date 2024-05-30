function isHappyNumber(num) {
    var sqr = num ** num;
    var sum = 0;
    while(num > 0) {
        sum += Math.floor(num%10);
        num /= 10;
    }

    if(sum === 1) {
        return true;
    } else {
        return false;
    }
}

var num = 10;
if(isHappyNumber(num)) {
    console.log(`${num} is a happy number`);
} else {
    console.log(`${num} is not a happy number`);
}