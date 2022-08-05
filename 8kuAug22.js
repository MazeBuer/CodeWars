/* Given a string, you have to return a string in which each character (case-senstive) is repeated once.
p: given string with any character ; string not be empty ; case sensitive ; 
r: return string with double characters ; exact double of character
e: 'String' -> 'SSttrriinngg' ; 'Hello World' -> 'HHeelllloo  WWoorrlldd'
p: split.('') into an array ; map to loop thru the array and create a new array; .joing('') */

function doubleChar(str) {
    let array = str.split('')
    return array.map(elem => elem + elem).join('')

}

console.log(doubleChar('1234!_'))
