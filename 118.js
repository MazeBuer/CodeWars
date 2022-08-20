/* Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word)before they went on vacation. Unfortunately, they have now left and the code they gave you doesnt work. Fix the helper function they wrote so that it works as inteded (make the first character in the string 'word' upper case)
P: will be given a string of a word. will string every be empty? no; will it have other characters ? no;
R: return the string with the first letter capitalized
E: 'hello' -> 'Hello'
P: at index [0] add to Upper Case; add rest of string with  slice at index 1/ join with +*/

let capitalizeWord = word => {
    return word[0].toUpperCase() + word.slice(1)

}


console.log(capitalizeWord('hello'))