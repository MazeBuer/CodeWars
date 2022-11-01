/* Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case and vis versa. 
Reverse order of words from the input. Note: you will need to handle multiple spaces, and leading/trailing spaces. You may assume the input only contains English alphabets and spaces.
inputting a string of word or words; may contain spaces; case sensitive; no characters; only English alphabets; not empty; reverse words order not mirrored words;
return reverse of words order and opposite case of the string; return will be a string'
'This ExaMplE' -> 'eXAmPLe tHIS'
'coDiNg ChaLLeNge TodAy' -> 'tODaY cHAllEnGE COdInG'
' hEllo ThERe FrIENd' -> 'fRienD tHerE HeLLO '
*/

// function oppositeString (str) {
// //string turn it into an array; .split method separated by ''; separate the string by words;
// let array = str.split('')
// let newStr = array.map( elem => elem == elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase()).join('')
// //loop thru the array and create a conditional if uppercase -> lowercae; vis versa
// //join the array again and split the array by ' ' to get the array separated by whole words
// return newStr.split(' ').reverse().join(' ')
// //reverse the word order and join again to get a string
// }

let oppositeString = str => str.split('').map(elem => elem == elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase()).join('').split(' ').reverse(). join(' ')

console.log(oppositeString('This ExaMplE'), 'eXAmPLe tHIS')
console.log(oppositeString('coDiNg ChaLLeNge TodAy'), 'tODaY cHAllEnGE COdInG')
console.log(oppositeString(' hEllo ThERe FrIENd'), 'fRienD tHerE HeLLO ')