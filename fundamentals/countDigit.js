//write a function that return the count of the digit in a number

let num = 12345678910111557
function countDigits(num){
    let count = 0

   
    for (let index = 0; index < num.toString().length; index++) {
         
        count++
        
    }
    return count;

    //easy method
    //  let result = num.toString().length
    // return result
}

console.log(countDigits(num))

//approach:- divide the number by 10 till the number is 0 , and count will be that many time the number divide by 10    

function digits(num){

    //edge case 
    if(num == 0) return 1;
    let count = 0

    //edge case if a number is negative
    num = Math.abs(num); // math.absolute make the negative number positive and now while loop we will

    while (num > 0) {

        num = Math.floor(num/10);   //dry run  //math.floor to make in integer
        count++;                    //20/10 = 2  1st time divide by 10
                                    //2/10 = 0   2nd time
    }return count                   //0/10 wont happen cause num > 0
}

let number = -10 // thats why answer will be 2

console.log(digits(number))
