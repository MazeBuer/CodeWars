/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
P: i will receive a string of words and characters; will string ever be empty? yes return empty string; 
R: return the string with words reversed, the order of the words shall be the same.
E: 'This is an example!' -> 'sihT si na !elpmaxe'
P: split string into array with no space; use reverse method; join back into a string; repeat with split with space; reverse and join back with space.*/

let reverseWords = str => str.split('').reverse().join('').split(' ').reverse().join(' ')

console.log(reverseWords('hello there Yes'))
