function print(str, n){
    //base case
    if(n === 0){
        return;
    }
    
    //recursive case
    console.log(str)
    print(str, n-1)
}
print("aryan",3)