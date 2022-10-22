/* Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string. 
string; single word; no characters; no numbs; all words have captial; 
return the index# of each captial letter; 
'iNtErView' -> [1,3,5]
'wOrD' -> [1,3]
'FuncTiOn' -> [0,4,6] */

function indexCapital (word) {
    //split word into an array split method; 
    //filter method; keep captial letters
    //loop thru elements and return indexOf
    let array = word.split('')
    return array.filter( cap => cap == cap.toUpperCase()).map( cap => array.indexOf(cap))

}
console.log(indexCapital('iNtErView'), '[1,3,5]')
console.log(indexCapital('wOrD'), '[1,3]')
console.log(indexCapital('FuncTiOn'), '[0,4,6]')