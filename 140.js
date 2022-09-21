/* An anagram is teh result of rearranging the letters of a word to produce a new word. Complete the function to return true or false if the two arguments given are anagrams of each other. Return false otherwise.
anagrams are case sensitive. 
P: will be given two strings of a single word;
R: return a boolean value if the two strings are anagrams
E: 'two': 'otw' true; 'onee': 'tone' -> false
P: first declare a variable for each where parameter is lowercased, split, sorted, and then joined back into a string; compare if two parameters are the same */

var isAnagram = function(test, original) {
    let first  = test.toLowerCase().split('').sort().join('');
    let second = original.toLowerCase().split('').sort().join('');
    console.log(first)
    console.log(second)
    return first == second

};

console.log(isAnagram('test', 'Etst'))