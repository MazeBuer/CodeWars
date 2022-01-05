/* Create a function called shortcut to remove the lowercase vowels (a,e,i,o,u) in a given string. 
P: will be given a string; will it ever be empty? yes; can string container non words? yes
R: return the string (word or not or empty) without lowercase vowles.
E: 'HELLO' -> 'HELLO' ; 'hello' -> 'hll'
P: we will split the string into an array; and  be retruning a string that contains characters from the original string. We will filter in anything non lowercase vowles; join string back together */

function shortcut (string) {
    return string.split('').filter( (vowel) => ! 'aeiou'.includes(vowel) ).join('')
}


let shortcut = string => string.split('').filter( (vowel) => ! 'aeiou'.includes(vowel)).join('')

console.log(shortcut('hEllo'))