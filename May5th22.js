/* create a function that removes the first and last character of a string. You're given a parameter, the original string.*/

function removeChar(str) {
    return str.splice(1, str.length-1)
}