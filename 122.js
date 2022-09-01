/* an anagram is the result of reearraning the letters of a word to produce a new word. Complete the function to return 'true' if the two arguments given are anagrams of each other; return 'false' otherwise
P: will be given two strings of a word. Two arguments
R: return a boolean if both arguments contain same elements (in diff order)
E: 'foefet' 'toffee' => true; 'dumble' 'bumble' => false;
P: split string into arrays; sort each array; compare the two sorted arrays */

var isAnagram = function(test, original) {
  return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
};

console.log(isAnagram('Tes','Set'))