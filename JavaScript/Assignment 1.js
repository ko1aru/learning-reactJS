function palindrome(str) {
    var rev;
    for(let i=str.length-1; i>=0; i--) {
        rev += str[i];
    }

    return rev === str;
}

var str = "malayalam"

if(palindrome(str)) {
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome");
}