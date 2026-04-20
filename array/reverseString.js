//the approach is simple
//have to reverse in-place to no extra space to just swap the first with last, second with second last and so on,
//only swap half times the length of array n/2 N=array.length

// let arr = ["h","e","l","l","o"]
let arr = ["h","e","l","l","o","o"]

function reverseString(arr){
    for (let i = 0; i < Math.floor(arr.length/2); i++) { //One loop till half of array. Swap current element with mirrored element from end
                                                         // Why Only Half Loop? Remaining swaps would repeat previous work
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];  //swap like [a,b] = [b,a]
        
    }return arr
}

console.log(reverseString(arr))