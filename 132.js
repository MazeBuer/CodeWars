/* The goal of this exercise is to convert a stirng to a new string where each character in the new string is "(" if that character appears only once in the original string, or ')' if that character apears more than once in the original string. Ignore capitalization when determining if a character is duplicate. 
P: i will have a string of a word; will the string be empty? no; 
R: returning ( for characters that appear only once and ) for characters that appear more than once. 
E: 'hello' -> (())(
P: turning the string into an array using .split(); make all letters .toLowerCase() to make sure all same letters are read and not affected by capitalization. loop thru the array and if an element == element return ( for that element. */

let duplicateEncode = word => {
    let words = word.toLowerCase()
    return words.split('').map( (e, i, a) => a.indexOf(e) == a.lastIndexOf(e)  ? '(' : ')').join('')
}

console.log(duplicateEncode('hello'))