//recursion:- function calling itself

function printNumber(num){
    //base condition(base case)
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


//Same question with correct approach

/*
Thinking:

Earlier:
- Current number was the only parameter.
- The stopping limit was decided manually.

Now:
- n = limit given by the user.
- i = current number.

Keeping them separate makes the recursion reusable for any n.
Only the input changes; the recursive logic stays the same.
*/


function print(n, i) {
    // n = limit (last number to print)
    // i = current number being printed

    // Base case:
    // Stop once the current number goes beyond the limit.
    // We use ">" instead of ">=" because we still want to print n.
    if (i > n) {
        return;
    }

    // Work to do for the current recursive call.
    console.log(i);

    // Recursive step:
    // Move to the next number while keeping the same limit.
    print(n, i + 1);
}

// Start from 1 and print until n.
print(5, 1);

/*
Recursion Thinking

Problem:
Print numbers from 1 to n.

State:
- n -> limit (doesn't change)
- i -> current number (changes every call)

Base Case:
- Stop when i becomes greater than n.

Recursive Step:
- Print current number.
- Call the function with i + 1.
*/