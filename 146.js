/* Write a function that takes a single string 'word' as argument. The function must return an ordered list containing the indexes of all capital letters in the string. 
P: will be given a string of a word;
R: return the index numbers of all the letters that are capital
E: IntERVieW -> [0,3,4,5,8]
P: first we will split the string into an array; use find method that will take in a function and return elements taht are true.

*/

var capitals = function (word) {
	let caps = [];
    for(let i=0; i<word.length; i++) {
        if(word[i].toUpperCase() == word[i]) {
            caps.push(i)
        }
    }
    return caps;
};

console.log(capitals('InteRVIew'))