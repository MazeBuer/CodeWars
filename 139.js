/* Write a function that takes a single string as an argument. THe function must return an ordered list containing the indexes of all capital lettes in teh string. 
P: will be given a string of a word, will there be spaces? yes; 
R: return the index which the capital letter is located.
E: exAmpLE -> [2,5,6]
p: turn the given string into an array using split method; loop thru each element and return indexOf e that are .toUpperCase() */

let capitals = word => {
    let caps = [];
    for(let i = 0; i < word.length; i++) {
        if(word[i].toUpperCase() == word[i]) {
            caps.push(i)
        }
    }
    return caps
}

console.log(capitals('HelLo'))