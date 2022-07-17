/* Return the number (count) of vowels given in the string. We will consider a,e,i,o,u as vowels. 
the input string only consists of lower case letters and/or spaces.
P: will be given a string of lowercased words; there will be spaces between the words
R: return the count of vowels present in the string
E: 'hello there' -> 4
P: turn the string into an array ; .filter anything that inlcudes a,e,i,o,u ; return the .length */

function getCount(str) {
    let vowels = str.split('').filter( w => 'AEIOUaeiou'.includes(w))
    return vowels.length
}

console.log(getCount('Hello there'))