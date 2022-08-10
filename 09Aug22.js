/* Given an array of integers, return a new array with each value doubled. 
P: integers, empty? yes return []; test for non integers in array? no; 
R: returning the array with integers doubled; in same order;
E: [1,2,3] -> [2,4,6]
P: use map.() to get a new array ; element times itself */

function maps(x){
    return x.map( (elem) => elem*2)
}