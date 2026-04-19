let arr = [3,2,2,3]

let val = 3;

function removeElement(arr,val){
    
    //edge case
    if (arr.length === 0) return [];

    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] !== val) { 
            arr[x] = arr[i]  //if the element is not equal to the val then move the element to x position //shift to left
            x++;          
        }
    }
    //returns the count of element removed 
    //return x    //output: 2
    
    //return the array with only remaining element
    return arr.slice(0, x);
};

console.log(removeElement(arr,val))