/* Return the number (count) of vowles in the given string.
We will consider a,e,i,o,u as vowels for this example. The input string will only consist of lower case letters and or spaces. 
P: we will be given a string of word or words that are lowercase. will string ever be empty? yes return empty string;
R: return the count of vowels inside the string;
E: 'hello there' -> 4
P: turn the string into an array; will filter in the vowels with .incdules; find the length of the string with only the vowles. return the lenght; */

let getCount = str => str.split('').filter(vowels => 'aeiou'.includes(vowels)).length

console.log(getCount('hello sir'))