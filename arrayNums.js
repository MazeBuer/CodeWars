/*You will be given an arary of numbers in which two numbers occur once and teh rest occur only twice. Your task will be to return the sum of the numbers that occur only once. 
//array numbs; always numbs; no strings; no non numbers; dnt need to account; never empty; no;
returing sum of numbers not repeated; single value;
[1,4,6,1,6,8] -> 12;
[2,3,7,3,7] -> 2;
[4,5] -> 9; */

function singleSum (array) {
    //since i want to keep certain elements in array i will use filter method for single values - index of n is last index of n. lastIndexOf checks the last index# of where that element appears; since it only appears twice
    //new array of single values get the sum using the reduce method.
    let single = array.filter( n => array.indexOf(n) === array.lastIndexOf(n)) //we check if the current index of Number is == the last index of Num which means theres only one index
    return single.reduce( (acc, curr) => acc + curr, 0)
}

console.log(singleSum([1,4,6,1,6,8]), '12')
console.log(singleSum([2,3,7,3,7]), '2')
console.log(singleSum([4,5]), '9')