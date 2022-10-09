/* Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital lettes in the string. 
P: string of a word; 
R: return the index #s of capital letters in the string
E: [HeLlO] -> [0,2,4]
P: declare an empty array; loop thru the string and filter all with UpperCase; then push() those filtered into new array; return array */

var capitals = function (word) {
	let array = [];
    for (let i=0; i<word.length; i++) {
        if(word[i].toUpperCase() == word[i]) {
            array.push(i)
        }
    }
    return array
};

console.log(capitals('HeLLog'))