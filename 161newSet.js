/*In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray. Make sure you dont count duplicates.
given an array with multiple sub arrays; awlays numbers; never an empty array; no string, special charac;
return a single value; value will be count of all possible sub arrays based on combinations possible
[ [1,2], [4], [5,6] ] => 4
[ [3,4], [5,6,6], [8,9] ] => 8
[ [1,2,3], [4,4,5,7], [8,9,10,12,5,6], [30,67] ] => 72
*/

function arrComb (arr) {
//get rid of all duplicates in each subarray
//multiply the length of each subarray together
 return arr.reduce( (a,c) => a*(new Set(c).size), 1)

}

console.log(arrComb([ [1,2], [4], [5,6] ]), '4')
console.log(arrComb([ [3,4], [5,6,6], [8,9] ]), '8')
console.log(arrComb([ [1,2,3], [4,4,5,7], [8,9,10,12,5,6], [30,67] ]), '108')
console.log(arrComb([1,2,3]))