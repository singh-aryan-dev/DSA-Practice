let arr = [3,2,2,3]

let val = 3;

function removeElement(arr,val){
    
    //edge case
    if (arr.length === 0) return [];

    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] !== val) { 
            arr[x] = arr[i] 
            x++;          
        }
    }
    //return x     //returns the count of element removed

    //return the array with only remaining element
    return arr.slice(0, x);
};

console.log(removeElement(arr,val))