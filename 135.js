/* Get the sum of all the elements of two arrays. 
P: will be given 2 arrays that will only contain integers, will any ever be empty? no; 
R: sum of all the element from both arrays; 
E: [1,2,3] [3,4,5] -> 18
P: sum each array separately using .reduce; once recive the value of each arrays sum add them togher. */

let arrayPlusArray = (arr1, arr2) => {
    let sum1 = arr1.reduce( (a,b) => a +b, 0)
    let sum2 = arr2.reduce( (a,b) => a + b, 0)
    return sum1 += sum2
}

console.log(arrayPlusArray([1,2,3], [3,4,5]))