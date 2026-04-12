//write a function to check if the given number is palindrome or not so return true or false

//logic
//to check palindrome , have to reverse the number and match with the given number (if matched it is palindrome)
//and to reverse a number take the last digit from the number add it in the variable(rev) and with the remaining number(without last digit) keep doing it until it is zero

//to get the last digit, should use modulo(%) by 10 and for the remaining number will be divide(/) by 10 (cause have to remove the last digit and continue the process)
//example 123%10 would give 3 and 123/10 would give 12(with math.floor)
//so just have to loop this number till it becomes zero and we get the number reversed

function palindrome(x){
    if(x < 0) return false

    let rev = 0
    let xCopy = x; //also to make the copy of the number to compare with reversed number

    while(x > 0){
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x/10); // removes the last digit 
    }
    if (rev == xCopy) {
        return true
    } else {
        return false
    }
}

console.log(palindrome(121))
console.log(palindrome(1234))
console.log(palindrome(1))
console.log(palindrome(-121))