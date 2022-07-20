/*Given a list of integers, determine whether the sum of its elements is odd or even. Given your answer as a string matching 'odd' or 'even'. if the input array is empty consider it as [0] (array with a zero)
P: what will the list of integers be in? an array of integers ; postive/neg? yes pos and neg ; empty array? yes ;
R: return 'even' or 'odd' based on sum of all integers in array
E: [0] -> 'even' ; [0,1,4] -> 'odd' ; [0,-1,-5] -> 'even' ; [] -> [0]
P: .reduce() to add the sum of the arrays. conditional for even, odd, or [0] */

function oddOrEven(array) {
    if(array.reduce( (a,b) => a+b, 0) % 2 == 0) {
        return 'even'
    }else if (array.reduce( (a,b) => a + b, 0) % 2 !== 0) {
        return 'odd'
    }else {
        return [0]
    }
    
}

console.log(oddOrEven([1,-5,6]))

//short code
return array.reduce( (a,b) => a+b, 0) % 2 == 0 ? 'even' : 'odd' 