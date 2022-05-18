/* Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces.
P: will be given an array of words
R: return the array as a string with space between
E: ['hello', 'world', 'this'] -> 'hello world this'
P: use a method that turns array to string ' ' .join(' ')
*/

function smash(words) {
    return words.join(' ')
}

let smash = words => words.join(' ')
