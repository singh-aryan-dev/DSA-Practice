// idea:
// increase count for 1
// reset count for 0
// track maximum during traversal

let arr = [0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1]

function maxConsecutive(arr){
    
    // currCount → keeps track of current streak of 1's
    // maxCount → stores maximum streak found so far
    let currCount = 0;
    let maxCount = 0;
    
    for(let i = 0; i < arr.length; i++){
        
        // if current element is 1 → increase streak
        if(arr[i] === 1){
            currCount++;
        } else {
            // if 0 → streak breaks, reset count
            currCount = 0;
        }
        
         // update max streak if current is greater
        if(currCount > maxCount){
            maxCount = currCount;
        }
    }
    
    return maxCount;
}
console.log(maxConsecutive(arr))