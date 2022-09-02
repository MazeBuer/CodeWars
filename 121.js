/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. 
P: will be given an array of integers in number and string form; will i need to check for empty arrays? no; any additional characters? no;
R: return sum of values of the array in number form
E: [1,2,'3',4] -> 10
P: add sum of all numbers with reduce function and turn all elements into numbers with +. */

function sumMix(x){
    return x.reduce( (a,b) => a + +b, 0)
}

console.log(sumMix([1,2,'3']))

//short form

let sumMix = x => x.reduce( (a,b) => a + +b, 0)