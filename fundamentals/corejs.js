// function sum(a,b){
//     return a + b 
// }

//  console.log(sum(2, 5))

// write if else condition

// function eligbleToVote(age){
//     if(age < 0){
//         console.log("Age can not be negative")
//     }
//     else if(age < 18){
//         console.log(`Not eligble to vote cause you are below 18 ${age}`)
//     }
//     else {
//         console.log(`You are eligible cause your age is${age}`)
//     }
// }

// eligbleToVote(10)
// eligbleToVote(20)
// eligbleToVote(0)
// eligbleToVote(-1)


//write a function to check given number is even or odd

// function check(num) {
//     if(num % 2 === 0){
//         console.log(`This number ${num} is even`)
//     }
//     else{
//         console.log(`This number is odd:${num} `)
//     }
// }

// check(5)
// check(10)
// check(253)

//loops
//for loop

// for (let i = 1; i <= 10 ; i++) {
//     console.log(i)
// }

// for( let i = 10; i > 0; i--){
//     console.log(i)
// }

//array with loop

// let array = [1,2,3,4,5,6,7,8,9,10,11]


// //print even numbers from the array
// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2 === 0) {
//         console.log(array[i])
//     }
//     // const element = array[i];
//     // console.log(element)
// }

// //print odd number from the above array
// for (let i =0; i < array.length; i ++){
//     if(array[i]%2 === 1){
//         console.log(array[i])
//     }
// }


//write a function that searches for an element in a array and returns the i and if element is not present return -1

// let arr = [1,2,3,4,5,6,7,8,9,10,11]

// function findEle(num){
//     for(let i = 0; i < arr.length; i++){
//         if(num === arr[i]){
//             // return arr[i]
//             return i;
//         }
//     }
//     return -1
// }

// console.log(findEle(10))
// console.log(findEle(12))

//write a function that returns the number of negative numbers in an array

// let arr = [1,-2,3,-4,5,-6,7,-8,9,-10,11]

// function findNeg(arr){
//     let count = 0 ;
//     for(let i = 0; i < arr.length; i++){
        
//         if(arr[i] < 0){
//          count++
//         }
//     } 
//     return count
// }

// console.log(findNeg(arr))

// //write a function that return the largest number in the array

// let arr = [1,-2,3,-4,5,-6,7,-8,9,-10,11]

// function findLarge(arr){
//     let max = arr[0] ;
//     for(let i = 0; i < arr.length; i++){
        
//         if(max < arr[i]){
//          max = arr[i]
//         }
//     } 
//     return max
// }

// console.log(findLarge(arr))

//write a function that return the smallest number in the array

// let arr = [1,-2,3,-4,5,-6,7,-8,9,-10,11]

// function findSmall(arr){
//     let min = arr[0] ;
//     for(let i = 0; i < arr.length; i++){
        
//         if(min > arr[i]){
//          min = arr[i]
//         }
//     } 
//     return min
// }

// console.log(findSmall(arr))

//write a function that returns the second largest element in an array


//approach 1 (sort the array)
// let arr = [1,-2,3,-4,5,-6,7,-8,9,10,11]

// function findSecLarge(arr){

//     let n = arr.length

//     arr.sort((a, b) => a - b);

//     //start from second last element of the sorted array and if it is not bigger then last element then that is the second largest element
//     for(let i = n-2; i >= 0; i--){
        
//         if(arr[i] !== arr[n-1]){
//          return arr[i]
//         }
//     } 
//     return -1
// }

// console.log(findSecLarge(arr))

//approach 2nd (one pass)

// let array = [10, 5, 10]

// function findSecoLarge(array){
//     let large = -Infinity;
//     let second = -Infinity;

//     for (let i = 0; i < array.length; i++) {
        
//         if(array[i] > large){
//             second = large;
//             large = array[i]
//         }
        
//         else if( array[i] < large && array[i] > second){
//             second = array[i]
//         }
//     }
//     return second
// }

// console.log(findSecoLarge(array))

//edge cases for this empty or less the 2 element in array
//if(n < 2){ return "No secondLargest element "}

//another edges cases for all the element in the array are same
//if(secondLargest === -Infinity){return "No secondLargest element"}


//while loop

// let i=0;
 
// while (i < 11) {
//     console.log(i);
//      i++;
// }

