/* given an array of integers, find teh Nth smallest element in teh array. Array/list size is at least 3
array/list numbers could be mixed pos, neg, and zero
repitition in array/list could occur, dont remove duplicate.
given an array parameter; numbers; no strings; no special characters; no boolean or other values; 3 or more in array; array will always contain n # or more of elements
return the N # of smallest elements in the array
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 */

function nthSmallest (array, num) {
//sort the array in ascending order - sort method sorts elements by UTF-16 character code; so we need to add a function that gets the integers and sorts them in numberical order. 
return array.sort( (a,b) => a > b ? 1 : a < b ? -1 : 0)[num-1]
//return first n elements in the array - since index start 0 we will return index of 0 -> n-1
}

console.log(nthSmallest([3,1,2], 2), '2')
console.log(nthSmallest([15,20,7,10,4,3], 3), '7')
console.log(nthSmallest([2,169,13,-5,0,-1], 4), '2')
console.log(nthSmallest([2,1,3,3,1,2], 3), '2')