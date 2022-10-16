/* this kata is about multiplying a given number by eight if it is an even number and by 9 otherwise.
given a parameter of an integer; will not receive a string; 
return a single value; if even * 8 and if anything else *9; neg and post;
8 => 64
1 => 9
3 => 27
2 => 16
0 => 0
*/

// function eightMultiply (num) {
// // if number is even mutiply by 8
// //if number is odd multiply by 9
//     if (num % 2 == 0) {
//         return num * 8
//     }else {
//         return num * 9
//     }
// }

let eightMultiply = num => num % 2 == 0 ? num*8 : num*9

console.log(eightMultiply(8), '64')
console.log(eightMultiply(1), '9')
console.log(eightMultiply(3), '27')
console.log(eightMultiply(2), '16')
console.log(eightMultiply(0), '0')
