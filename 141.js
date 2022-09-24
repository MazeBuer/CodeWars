/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same string, ordered from shortest to longest. 
P: will be given an array of strings; will the array ever be empty? no; will we need to check for non string elements? no
R: return the array in order of string length from shortest to longest
E: ['hello','yes','hier'] -> ['yes','hier','hello'] 
P: sort the array using sort method and function inside that lets you sort based on # length.*/

let sortByLength = array => array.sort( (a,b) => a.length > b.length ? 1 : a.length == b.length ? 0 : -1)

console.log(sortByLength(['hello', 'ejgjoobao', 'yes', 'no']))