/* You might know some large perfect squares. But what about the next one? 
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integeral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect squaree then -1 should be returned. You may assume the parameters is non-negative. */
//p: non-negative integer; 
//r: return the next interger that is a square; if parameter given is not a perfect square return -1;
//e: 121 -> 144 ; 114 -> -1
//p: given a number, want to continue upwared in numbers until i reach the next number which sqrt % === 0. sq the parameter to get the sq number and then 121-> 

function findNextSquare(sq) {
    if(Math.sqrt(sq) % 1 !== 0) {
        return -1
    } else {
        return Math.pow((Math.sqrt(sq) + 1),2)
    }
}

console.log(findNextSquare(121))

console.log(Math.pow((Math.sqrt(121) + 1),2))