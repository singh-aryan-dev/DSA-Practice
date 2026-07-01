//recursion:- function calling itself

function printNumber(num){
    //base condition
    //it is a condition where recursion stop making new calls
    if( num == 5){
        console.log(num);
        return
    }
    //if we don't write the base condition the stack will keep getting filled with functions and then computer memory will exceed the limit and that is called stackoverflow error
    
        console.log(num)
        
        //recursive call
        //if you are calling a function again and again, you can treat it as a seperate call stack 
        printNumber(num + 1)
}

printNumber(1)