/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any character.
P: */

function XO(str) {
    let strg = str.toLowerCase().split('')
    return strg.filter(x => x === 'x').length === strg.filter(x => x === 'o').length
}

console.log(XO('xopjgjo'))