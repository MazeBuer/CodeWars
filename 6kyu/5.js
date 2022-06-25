/*Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times
P: we are given an array of integers, it will not be empty, at least always one odd (do not need to check if only evens)
R: return the integer that is repeated an odd amount of times
E: [1,1,2] -> 1
P: .sort() the array to put the numbers in order. Filter() out the integers that are !%2 */

console.log(findOdd([1,4,8,3,6,3,7,3,7,6,8,4,1,1]))

function findOdd(arr) {
    return arr.find( (item,index) => arr.filter(elm => elm == item).length % 2)
}
//go into the array and .find() based on item and index. inside find you will filter out element == item to look at all the elements that are the same. outside filter now get the length (amount of times that same element is repeated) and check if it is % by 2. 