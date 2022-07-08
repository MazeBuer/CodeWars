/*Given a set of numbers, return the additive inverse of each. Each positive becomes negative, and the negative become positives. 
P: Given an array of interges; they will contain positive and negatives; will we have empty array? yes; 
R: return a new array; return opposite of each integer in the array
E: [1,2,3,4] -> [-1,-2,-3,-4]
P: use .map() to create a new array; return -() of the integer */

function invert(array) {
    return array.map((integer) => -(integer));
}