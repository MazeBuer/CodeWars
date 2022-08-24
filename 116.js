/* Complete the solution so that it reverses all of the words within the string passed in. 
P: you will be given a string of words; would i reverse the letters in the words or just the phrase? the phrase; will string be empty? if it is return empty string; 
R: return reverese phrase of a string (not each element)
E: 'hello world!' -> 'world! hello' ; 'I got pizza' -> 'pizza got I'
P: split string into array with spaces .split(' '); reverse method on array; join string back with space .join(' ') */

let reverseWords = str => str.split(' ').reverse().join(' ')

console.log(reverseWords('hello world'))