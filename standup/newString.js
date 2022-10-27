/*The goal of this exercise is to conver a string to a new string where each character in teh new string is '(' if that character appears only once in teh original string or ')' if that character appears more than once in the original stirng. Ignore capitilization when determining if a charaer is a duplicate. 
string; yes anything in string; yes spaces; yes count spaces; 
string ( ); only one ( and more than once is );
'din' -> '((('
'Beet' -> '())('
'recede' -> ()()()'
'(( @' -> '))((' */

// function repeatChar (str) {
//     //turn string into an array; and turn all letters to upperCase
//     let array = str.toLowerCase().split('')
//     //loop thru each element
//     return array.map( (e) => array.indexOf(e) === array.lastIndexOf(e) ? '(' : ')' ).join('')
//     //compare each element to look for repeats
//     //conditional if repeated return ) if not return (
//     //joining back array into a string
// }

let repeatChar = str => str.toLowerCase().split('').map( (e) => str.indexOf(e) === str.lastIndexOf(e) ? '(' : ')').join('')

//optimized alogrithms 
/* hasmap - */

console.log( repeatChar('din'), '(((')
console.log( repeatChar('beet'), '())(')
console.log( repeatChar('recede'), '()()()')
console.log( repeatChar('(( @'), '))((')
