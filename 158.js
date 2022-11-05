/* Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.  Your function should return true if all elements in teh array are square and false if not. An empty array should return undefined/none/nil/false. You can assume all array elements will be positive. */

function isSquare (arr) {
    return arr.length > 0 ? arr.every( (e) => Math.sqrt(e) % 1 == 0) : undefined
}

console.log(isSquare([1, 4, 9, 16, 25, 36]))
console.log(isSquare([1, 2, 3, 4, 5, 6]))
console.log(isSquare([]))
console.log(isSquare([1, 2, 4, 15]))