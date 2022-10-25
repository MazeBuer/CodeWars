/*return the number of unique arrays that can be formed by picking exactly one element from each subarray. 
For example: solve([ [1,2], [4], [5,6] ]) = 4, because it results in only 4 possibilities. They are [1,4,5] [1,4,6] [2,4,5] [2,4,6].
Make sure that you don't count dupicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
parameter of an array; multiple arrays inside; never empty; ignore duplicates; no special characters; no words/strings; 
return a single value; number of subarrays possible created using a single element from each array; all possible options; 
solve([ [1,2],[4],[5,6] ]) -> [1,4,5], [1,4,6], [2,4,5], [2,4,6] => 4
solve([ [1,2],[4,4],[5,6,6] ]) -> [1,4,5], [1,4,6], [2,4,5], [2,4,6] => 4
solve([ [1,2],[3,4],[5,6] ]) -> [1,3,5], [1,4,5], [1,3,6], [1,4,6], [2,3,5], [2,3,6], [2,4,5], [2,4,6] => 8
solve([ [1,2,3],[3,4,6,6,7],[8,9,10,12,5,6] ]) => 72
multiplying the length of each sub array together*/

// function solve (array) {
// //set you cannot have duplicate values; use set for each sub array
// //loop thru the array and remove the duplicates 
// //do not care about teh value of element, just the unique value of each sub array; map[1,2][4][5,6] -> 2,1,2 values
// //reduce method array; multiply the new length of each sub array together
//     let map = array.map( subarr => [...new Set(subarr)].length) //loops thru each sub array and Set leave only non-repeated
//     return map.reduce( (a,c) => a*c, 1)
// }

//optimized
let solve = array => array.reduce( (a,c) => a * new Set(c).size, 1)

console.log(solve([[1,2],[4],[5,6]]),"4")
console.log(solve([[1,2],[4,4],[5,6,6]]),"4")
console.log(solve([[1,2],[3,4],[5,6]]),"8")
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),"72")