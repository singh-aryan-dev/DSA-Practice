// approach:
// instead of moving zeroes directly, I decided to move all non-zero elements to the front
// and then fill the remaining positions with zeroes

let nums = [0,1,0,3,12];

function moveZeroes(arr){
    let x = 0;
    
    if (arr.length === 0) return arr; //edge case

    // step 1: move all non-zero elements to the front
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){    // if element is non-zero, keep it
            arr[x] = arr[i];  // place element at correct position
            x++;  // move pointer forward
        }
    }


    // step 2: fill remaining positions with zero
    // from index x to end of array
    for(let i = x; i < arr.length; i++){
        arr[i] = 0;
    }

    return arr;
}

console.log(moveZeroes(nums));