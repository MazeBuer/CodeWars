/* Complete the solution so that it returns true if the first argumenet (string) is passed in ends with the 2nd argument (also a string) 
P: we will be given an argument of two separate strings. Will they contain integers? only letters? together or spaced? no space and only letters
R: return true or false
E: soltuion('abc', 'bc) // true ; solution ('abc','d') //false
P: we are comparing two strings, the second string has to be the end of the first string to return true. use ; split to turn it into an array; use endswith() and return true or false */

let solution = (str, ending) => str.endsWith(ending)

console.log(solution('abc', 'bcd'))