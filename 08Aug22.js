/* Given an array of integers, Return a array, where the first element is the count of positive numbers and the second element is the sum of negative numbers. 0 is neither positive nor negative. If the input is an empty array or is null, return an empy array. 
P: we will be given an array with integers; will there be string? no ; empty? yes ; 0 count as neither pos or neg. 
R: returning a new array with post number length and sum of negatives. if empty return empty array.
E: [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14] -> [10, -65]
P: declare empty array ; create loop ; conditional if i < 0 return sum ; i > 0 return .length ; if array.length = 0 return []
return something already in array -> .filter()
*/

function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0) {
        return []
    }

    let posLength = input.filter( (a) => a > 0).length
    let negNum = input.filter( b => b < 0)
    let sum = negNum.reduce( (n,n2) => n + n2, 0)
    return [posLength, sum]
     
}

console.log(countPositivesSumNegatives(null))
