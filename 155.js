/* given array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray. make sure you don't count duplicates
given an array with sub arrays; only contain numbers; no strings; no empty arrays; remove duplicates;
return single value of all possible array arrangements
solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72) */

function solve (array) {
    //loop thru each sub array
    //remove duplicates
    //dont care about values, want to find possible combinatins by multiplying each array.length with each other
    return array.reduce( (a,c) => a * new Set(c).size, 1)
}

console.log(solve([[1,2],[4],[5,6]]),"4")
console.log(solve([[1,2],[4,4],[5,6,6]]),'4')
console.log(solve([[1,2],[3,4],[5,6]]),'8')
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),'72')