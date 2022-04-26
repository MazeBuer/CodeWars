/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6,9. The sum of these is 23. FInish the solution so that it returns the sum of all multiples of 3 or 5 below the number passed in. Additioanlly, if the number is negative, return 0. NOTE** if it is a multiple of 3 and 5 only count it once. 
P: we will be given a number ; if negative return 0 ; 
R: we will return the sum of the list of numbers given with multiples of 3 or 5.
E: 10 -> get all numbers below (not equal to) 3,5,6,9 and add them -> 23
P: we will loop thru all the numbers that are multiples of 3 and 5. return the sum */

function solution(number) {
    let sum = 0;
    for (let i=1; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}

console.log(solution(10))