/* Write a function that returns a string in which the firstname is swapped with last name'
P: will be given a parameter of a string with 2 words; will it ever be empty? yes return empty string; will it ever only be one name? no;
R: return the string with order in switched;
E: 'John Doe' => 'Doe John'
P: turn the string into an array of words; revserse the order of the array; join back into a string. */

let nameShuffler = str => str.split(' ').reverse().join(' ')

console.log(nameShuffler('John William Doe'))