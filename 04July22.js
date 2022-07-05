/*Write a function RemoveExclamationMarks which removes all excalamtion marsk from given string.
P: we will be given a string with ! at the end.
R: return the string without !
E: Hello World! -> Hello World
P: filter out anything not ! */

function removeExclamationMarks(s) {
    return s.split('').filter( (expoint) => !expoint.includes('!')).join('')
}

console.log(removeExclamationMarks('Hello World!'))