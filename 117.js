/* given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
p: will be given an array that contains numbers and integers as strings; will array be empty? will it ever not be an integer? no;
R: return the sum in integer form.
E: [1,'2',5] -> 8
P: turn string in array into number; add all numbers in the array using reduce; return sum */

function sumMix(x){
    return x.map( a => +a).reduce( (a,b) => a + b)
}

console.log(sumMix([1,'2',5]))