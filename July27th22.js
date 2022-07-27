/*given an array of integers, remove the smallest value. Do not mutate the original array. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left. If mulitple of same value remove w lower index
P: given an array of integers ; can the array be empty? yes ; will i need to test for non integers in the array? no ; will there be cases of duplicate? yes, remove the lower index. What if we only have one integer in the array? reutrn that number dont remove it
R: return the array without the lowest number in the oringal order. 
E: [1,2,3,4,5] -> [2,3,4,5] ; [] -> []
P: Math.min() value to tell us which is the smallest value ; .filter() out that value ; if empty return empty ; */

function removeSmallest(numbers) {
    let smallest = Math.min(...numbers)
    return numbers.filter( (num, i) => i !== numbers.indexOf(smallest))
    
}

let array = [1,6,8,2,0]
console.log(removeSmallest(array))
console.log(Math.min(...array))