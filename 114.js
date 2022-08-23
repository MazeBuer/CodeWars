/* Write a function which calculates the average of the numbers in a given list.
P: will be given a list of numbers in array; will it ever be empty? yes return 0; 
R: return the average of numbers in the array
E: [3,4,5] -> 4 
P: add all integers in the array with reduce(); divide by length of array; */

let find_average = array => {
    array.length > 0 ? array.reduce( (a,b) => a+b, 0) / array.length : 0
}

console.log(find_average([1,3,5,6]))