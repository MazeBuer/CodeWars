/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate thier average for them. Return the average of the given array rounded down to its nearest integer. Array will never be empty.
P: given an array of integers; will i need to test for non integers in teh array? no; array will never be empty.
R: return the average number of the array rounded down to nearest integer.
E: [1,2,3,4] -> 2
p: add all the integers in the array using .reduce(); divide that number by the array length; round down with math.floor() */

let getAverage = marks => Math.floor((marks.reduce( (a,b) => a + b, 0))/marks.length)

console.log(getAverage([1,2,3,4]))