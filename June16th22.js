/* In this kata you will create a function that takes a list of non-negative integers and strings and retuns a new list with the strings filtered out. 
P: we will be given an array of integers and strings. all postive. Will we be given an empty array? 
R: return a NEW array with only integers
E: [1,4,'abc','hello',5] -> [1,4,5]
P: we will be filtering out integers into a new array .filter() with typeof === 'string' */

function filter_list(l) {
    return l.filter( (word) => typeof word == 'number' )
}

console.log(filter_list(['a', 1]))
console.log('hello')