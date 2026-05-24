// idea:
// find expected sum from 0 to n
// find actual sum of array
// subtract both sums
// remaining value is the missing number

let nums = [3,0,1];

function missingNumber(nums){
    
    // n is length of array
    let n = nums.length;
    
    // expected sum of numbers from 0 to n
    let expectedSum = (n * (n + 1)) / 2;
    
    // stores sum of array elements
    let actualSum = 0;
    
    // calculate actual sum
    for(let i = 0; i < nums.length; i++){
        actualSum += nums[i];
    }
    
    // missing number = expected sum - actual sum
    return expectedSum - actualSum;
}

console.log(missingNumber(nums));