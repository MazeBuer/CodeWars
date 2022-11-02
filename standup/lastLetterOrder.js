/*Given a string of words (x), you need to return an array of words, sorted alphabetically by the final character in each. 
If two words have the same last letter, the returned array should show them in the order they appeared in the given string. All inputs will be valid.
given a string of multiple words; no characters; only letters and spaces; never empty;
returing the string given in order of last letter; returing an array (not string)
'man i need a taxi up to ubud' -> ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
'what time are we climbing up the volcano' -> ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
'take me to semynak' -> ['take', 'me', 'semynak', 'to'] */

// function lastLetterOrder (str) {
// //turn string into an array based on word separaton using split method. split(' ')
// let array = str.split(' ')

// //reverse the words itself (not the order)
// let unSorted = array.map( e => e.split('').reverse()).sort()
// //now sort the array
// //reverse the words back (not the order)
// return unSorted.map( e => e.reverse().join(''))
// }

let lastLetterOrder = str => str.split(' ').map( e => e.split('').reverse()).sort().map(l => l.reverse().join(''))


console.log(lastLetterOrder('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
console.log(lastLetterOrder('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
console.log(lastLetterOrder('take me to semynak'), ['take', 'me', 'semynak', 'to'])