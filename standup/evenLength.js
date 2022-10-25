/*Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//given an array of numbers; and a integer; array never be empty; no special characters; always number; will always contain at least the wanted # of evens;
return the last x amount of numbers that are even from the array; return in array format
[1,2,3,4,5,6,7,8,9] , 3 -> [4,6,8]
[-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2 -> [-8,26]
[6, -25, 3, 7, 5, 5, 7, -3, 23], 1 -> [6] */

// function lastEven (array, num) {
//     //create array with specific elements already in the array; use .filter method
//     let even = array.filter(e => e % 2 == 0)
//     //get a portion of that array into a new array; the last x number of elments from that new array; use slice method 
//     return even.slice((-num), even.length + 1)
// }

let lastEven = (array,num) => array.filter( e => e % 2 == 0).slice( (-num), array.length+1)

console.log(lastEven([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), "[4, 6, 8]")
console.log(lastEven([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), "[-8,26]")
console.log(lastEven([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), "[6]")