/*Implement a difference function, which subtracts one list form another and returns the results. It should remove all values from list a, which are present in list b keeping thier order. 
arrayDiff( [1,2], [1]) == 2 If a value is present in b, all of its occurrences must be removed from the other. 
2 paramters of arrays; a never empty; b can empty; b will always be prsent in a; only numbers in array; b can be mulitple numbers;
new array of a excluding element present in b. 
a: [1,2,3,4] b:[2] => [1,3,4]
a: [2,5,8] b:[] => [2,5,8]
a: [] b:[3,4] => [] */

function arrayDiff (a, b) {
//filter method; always returing certain elements in the array
//inside filter use newSet
let newSet = new Set(b)
return a.filter( n => !newSet.has(n))
}

console.log( arrayDiff([1,2,3,4], [2]), '[1,3,4]')
console.log( arrayDiff([2,5,8], []), '[2,5,8]')
console.log( arrayDiff([], [3,4]), '[]')
