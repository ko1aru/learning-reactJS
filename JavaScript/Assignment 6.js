var numArr = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
var numToFind = 21;
if(findNum(numArr, numToFind)) {
    console.log(numToFind + " found in the array")
} else {
    console.log(numToFind + " is not found in the array")
}

function findNum(numArr, numToFind) {
    for(num of numArr) {
    //    console.log(num);
        if(numToFind === num) {
            return true;
        }
    }
    return false;
}