/* Write a function that takes an array of strings as an argument adn returns a sorted array containing the same strings, orderd from shortest to longest.
P: will the array contain integers (not string)?will a string be empty? we will be given an array of strings
R: return the order of strings from shortest length to longest
E: ['hello', 'hi', 'tommyogo'] -> ['hi','hello','tommyogo']
P: .sort() a-b to sort array */

function sortByLength (array) {
  return array.sort( (a,b) => a.length - b.length, 0)
};