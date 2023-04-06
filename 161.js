/* 1) Given a non-emtpy array of integers, return the result of mulitplying the values together in order. 
ex. [1,2,3,4] => 1*2*3*4 = 24
*/

let getMultiple = array => array.reduce( (a,c) => a*c)

console.log(getMultiple([1,2,3,4]))
console.log(getMultiple([2,6,4]))
console.log(getMultiple([2,10,5]))

/* 2) Create a function called 'shortcut' to remove the lowercase vowels a,e,i,o,u in a given string. dont worry about uppercase and y is not considered a vowel. 
Example: 'hello' -> 'hll'
         'codewars' -> 'cdwrs'
         'goodbye' -> 'gdby'
         'HELLO' -> 'HELLO'
*/

let shortcut = string => {
    let arrays = string.split('')
    return arrays.filter( e => !'aeiou'.includes(e)).join('')
}

console.log(shortcut('hello'))
console.log(shortcut('codewars'))
console.log(shortcut('goodbye'))
console.log(shortcut('HELLO'))