/* take in an array of string letters; letters always be either 'n' 'w' 's' 'e'; never empty array; each letter is 1 min
return boolean value when array presents exactly 10min of walking; must include the return trip SO have the same value of opposite directions
*/

function isValidWalk (array) {
   if( array.length == 10 && array.filter(y => y == 's').length == array.filter(x => x == 'n').length && array.filter(a => a == 'e').length === array.filter(b => b == 'w').length) {
    return 'worked'
   }else {
    return 'no'
   }
    
}

let isValidWalk = array => array.length == 10 && array.filter(y => y == 's').length == array.filter(x => x == 'n').length && array.filter(a => a == 'e').length === array.filter(b => b == 'w').length

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'true')
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'false')
console.log(isValidWalk(['w']), 'false')
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'false')