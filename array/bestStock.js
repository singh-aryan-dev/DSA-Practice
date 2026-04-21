//best time to but and sell stock
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0

//example
//Input: prices = [7,1,5,3,6,4]
//Output: 5
//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


let price = [8,9,7,1,5,3,6,4]

function bestStock(arr){
    
    let min = arr[0];
    let profit = 0;
    let maxProfit = 0;
 
    
    for(let i = 0; i < arr.length; i++){
        
        //minSoFar = Math.min(minSoFar, arr[i]);
        if(min > arr[i]){
            min = arr[i]
        }
        //profit = arr[i] - minSoFar;
        if(arr[i] > min){
            profit = arr[i] - min
        }
        
        //maxProfit = Math.max(maxProfit, profit)
        if(profit > maxProfit){
            maxProfit = profit;
        }
    }
    return maxProfit
}

console.log(bestStock(price))