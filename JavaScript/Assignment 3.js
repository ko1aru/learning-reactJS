function numToArr(num) {
    var numArr = [];

    while(num != 0) {
        numArr.unshift(num%10);
        num = Math.floor(num/10);
    }

    return numArr;
}

var num = 1234;
console.log(numToArr(num));