//7KYU

/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even return the middle 2 characters.
P: Will be given a word in a string even or odd in length
R: return the middle character for odd length words and 2 middle character for even length words.
E: 'hello' -> l ; 'word' -> or
P: use .substring(par, par) to separate certain characters of a string
Now for words with odd length first parameter will be .length / 2. second parameter will be .length/2 + 1
for words even first parameter will be .length/2 -1, second parameter will be the first + 2 */

function getMiddle(s) {
    let position;
    let length;

    if(s.length % 2 === 1) {
        position = s.length/2
        length = 1 //since odd we are returning only 1 character
    }else {
        position = s.length/2 -1
        length = 2 //since even wer are returning 2 characters
    }
    return s.substring(position , position + length)
}

console.log(getMiddle('hummin'))
let ram = 'humming'
console.log(ram.length/2)