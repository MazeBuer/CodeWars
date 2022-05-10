/* Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering. Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. The format is n: string.
ex. number(['a','b','c','d']) -> ['1: a', '2: b', '3: c', '4: d'] 
1) we want to attached #: to each using loops
2) use .map to create a function with 2 parameters. element and index.
3) we will add +1 to index and concatnate it with : and element. 

*/
let number = function(arr) {
    return arr.map( (element, index) => (index + 1) + ': ' + element )
}

