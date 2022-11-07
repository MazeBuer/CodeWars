/*each character that appears only once is replaced with '(' and more than once replaced with ')' 
any character or anything in string cana be used
return ( or ) based on repeated or not. ignore capitalization
*/


// let dupElem = str => {
// //turn string into lowercase and then an array
// //loop thru the array and check if current index # matches the last index # of that element
// //if matches means its single - if not means its duplicated
// let array = str.toLowerCase().split('')
// return array.map( e => array.indexOf(e) == array.lastIndexOf(e) ? '(' : ')' ).join('')
// }

let dupElem = word => word.toLowerCase().split('').map( (e,i,w) => w.indexOf(e) == w.lastIndexOf(e) ? '(' : ')').join('')

console.log(dupElem('din'), '(((')
console.log(dupElem('recede'), '()()()')
console.log(dupElem('Success'), ')())())')
console.log(dupElem('(( @'), '))((')