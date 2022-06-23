/* your task is to write function findSum. Upto and including n, this function will return the sum of all multiples of 3 and 5. 
P: we will be given an integer positive or negative;
R: return the sum of the list of all multiples of 3 and 5 including the given number.
E: 5 -> 3,5 = 8 ; 10 -> 3,5,6,9,10 = 33
P: we will loop thru the numbers starting from 1 to and including n. sum all the numbers on the list that are divisible by 3 or 5. */

function findSum(n) {
    let sum = 0;
    for(let i=1; i <= n; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

console.log(findSum(20))