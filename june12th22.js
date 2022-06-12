/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. 
P: will this be in a string format? will there be a case where i will be given multiple words? Will i need to test if the string is empty or contains anything other than a word, as in integers? No just a string of one word. 
R: I will return 1 middle character for odd words and 2 middle character for even words.
E: 3 Examples: 'hello' -> 'l' ; 'testing' -> 't' ; if it is just one letter? 'A' -> 'A'
P: first we will split the string into an array. .split() ; we need to find the array .length we will have a conditional. ; if .length is even and if length is odd (else return nothing) ; if even array.length / 2 = element. return element. ; if odd .length / 2 (element returned will be decimal so we have to Math.floor it down) element + element -1 */

function getMiddle (s) {
    let str = s.split('')
    let element = str.length / 2;
    if(str.length % 2 === 0) {
        return str[element-1] + str[element]
    }else {
        return str[Math.floor(element)]
    }

}

console.log(getMiddle('helow'))