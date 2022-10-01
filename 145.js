/*if we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6,9. The sum of these mutiples is 23. 
Finish the solution so that it reutns the sum of all the multiples of 3 or 5 BELOW the number passed in. Additionally, if the number is negative, return 0. If the number is a multiple of both 3 and 5 only count it once. 
P: we will be given an array of numbers under 10; if negative return 0;
R: return the numbers that are multiples of 5 or 3 and sum them. 
E: [1,5,8,9] = [5,9] -> 14
P: create map loop to return a new array that is % by 3 or 5; once that new array is created reduce that array to summation. */

function solution(number){
    let sum = 0;
    for(let i =1; i < number; i++) {
        if( i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum
}

console.log(solution(10))