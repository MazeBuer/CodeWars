/*You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Given an array of even and odd numbers; pos; not emtpy
return array sorted in order for odd # and same position for even #'s. So ONLY the odd will be changing among themselves
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]*/

function sortArray (arr) {
//filter to only grap the odd #'s
//sort the odd numbers
const oddNums = arr.filter( n => n % 2 !==0).sort( (a,b) => a-b)
//console.log(oddNums)
//map
return arr.map(n => n % 2 === 0 ? n : oddNums.shift())
}


console.log(sortArray([7, 1]),'[1, 7]')
console.log(sortArray([5, 8, 6, 3, 4]), '[3, 8, 6, 5, 4]')
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), '[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]')