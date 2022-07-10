/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.It should remove all values from list a, which are present in list b keeping thier order. Remove all values from list a, which are present in list b keeping thier order. 
P: we will be given 2 arrays of integers ; will any be empty? yes -> if a[] return [] if b [] return a ; will any container non integer? no
R: return array a with all integers that match array b to be gone ; in the same order
E: [1,3,6,6,7] [6] -> [1,3,7]
P: for array a filter anything thats does not include element in array b */

function arrayDiff(a, b) {
    return a.filter( array => !b.includes(array))
}

console.log(arrayDiff([1,2,3],[3]))