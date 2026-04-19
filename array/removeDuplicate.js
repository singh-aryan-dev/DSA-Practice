let arr = [0,0,1,1,1,2,2,3,3,4]

function removeDuplicate(arr){
    
    //edge case
    if (arr.length === 0) return [];

    let x = 0;

    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] !== arr[x]) { //different from the last unique element //also x points to last unique element    
            x++;          // moves the x to next position 
            arr[x] = arr[i]     // replace the element with unique element // at the place of x we put the i(unique) element
        }

    }

    //returns the number of unique elements
    // return x + 1;

    // return only unique portion of array
    return arr.slice(0, x + 1);

    //return array with all the unique element at the start and rest as it is.
    //return arr
    
};

console.log(removeDuplicate(arr))