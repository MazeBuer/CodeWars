/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Return the average of the given array rounded down to its nearest integer. Array will never be empty. 
array; integers; no words or charac; always numbers; never empty; 
single value of average; rounded down nearest whole value;
getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)
*/

// function avgReport(nums) {
// //sum the array; reduce method - 
// //sum value divide by array.length 
// //return value - rounded down
// let sum = nums.reduce( (acc,curr) => acc + curr, 0)
// return Math.floor(sum/nums.length)
// }

let avgReport = nums => Math.floor(nums.reduce( (acc,curr) => acc + curr, 0)/nums.length)

console.log(avgReport([2,2,2,2]), 2)
console.log(avgReport([1,2,3,4,5,]),3)
console.log(avgReport([1,1,1,1,1,1,1,2]),1)

