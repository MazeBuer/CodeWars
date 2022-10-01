/* Your goal in this kata is to implement a different funcition, which subtracts one list from another and returns the reults. It should remove all values from list a, which are present in list b keeping their order. if a value is present in b, all of its occurrences must be removed form the other. 
P: will be given 2 arrays of integers; will b be any amount of integers or only one? any; will we ever get an empty array of either? no;
R: return array a where elements that are present in array b are removed.
E: [1,2,4,2,5] [2] -> [1,4,5]
P: crate a filter of returning an array where it does not inlcude element of array b */

let arrayDiff = (a,b) => a.filter(e => !b.includes(e))


//you are getting array a and alreaday filtering it; inside the filter you have e for element and you get elements from array a that does not include elements in array b.
console.log(arrayDiff([1,2,3],[2]))