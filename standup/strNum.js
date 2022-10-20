/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. 
array -> numbers string integes; no other charac; no words; not empty;
return the sum of all numbers and strings;
[1,'5',7,'8'] -> 21
[3,'1',2] -> 6
['1','4','5'] -> 10 */

// function sumArray (array) {
// //get the array returning a single value; reduce method; 
// // add Number()
// //return reduced array
// return array.reduce( (acc,curr) => acc + Number(curr), 0)

// }

let sumArray = array => array.reduce( (acc,curr) => acc + Number(curr), 0)

console.log(sumArray([1,'5',7,'8']), '21')
console.log(sumArray([3,'1',2]), '6')
console.log(sumArray(['1','4','5']), '10')