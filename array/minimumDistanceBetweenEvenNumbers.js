/*
1. Traverse the array from left to right
2. Track index of last seen even number
3. When we find a new even number:
   - calculate distance from previous even
   - update minimum distance
4. If less than 2 even numbers exist, return -1
*/

let arr = [2, 5,4];

function distance(arr){
    let lastEvenIndex = -1; // store index of previous even number
    let minDistance = Infinity; // store minimum distance found so far
    for(let i = 0; i < arr.length; i++){
        if(arr[i ] % 2 === 0) { // check if current element is even
            if(lastEvenIndex !== -1){  // if this is not the first even number
                let distance = i - lastEvenIndex;   // calculate distance between current and previous even
                minDistance = Math.min(minDistance, distance)  // update minimum distance if smaller found
            }
            lastEvenIndex = i; // update last seen even index
            
        }
    }
      // if no valid pair found, return -1  
    return minDistance === Infinity ? -1 : minDistance;
    
}

console.log(distance(arr))