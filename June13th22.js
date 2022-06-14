/* You like building blocks. You especially like buidling blocks that are square. And what you even like more is to arrange them into a square of square building blocks. Given an integer number, dtermine if it is a square number.
P: will we be given a string of integers? a single integer? will there be negatives and 0?  yes 0 will be counted as squared
R: i will be returning true or flase if an integer is rooted evenly
E: 3 -> false ; 4 -> true ; 25 -> true
P: find out if a number is a square number. So we will need to determine if how to find the square root of a number. Math.sqrt() returns the square root of a number. So Math.sqrt(numbr) and check if % 1 === 0. */

let isSquare = n => {
    let square = Math.sqrt(n)
    if(square % 1 === 0) {
        return true
    }else {
        return false
    }
}

console.log(isSquare(-1))