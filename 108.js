/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. return the resulting string
P: will be given a string of numbers; need to test for non integers in the string? no; ever be empty? no;
R: return a new string where all less 5 are 0's and all 5 and up are 1;
E: '537136' -> '101010';
P: first turn the string into an array using .split('') method; ternary conditaial statement for below 5 and 5 and up; finally i will join('') back the array into a string. */

let fakeBin = binary => binary.split('').map( (array) => array < 5 ? '0': '1' ).join('')

console.log(fakeBin('3785'))