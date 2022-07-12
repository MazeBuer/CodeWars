/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. */
//P: We will be given a whole number; positive or negative; 
//R: return the sum of each digit from whole number given. sum will be the absolute value
//E: 101 -> 2 ; -35 -> 8 ; 20 -> 2
//P: turn integer into an array ; Array.from(String(x), Number); reduce to add all integers in array
function sumDigits(number) {
    return Array.from(String(number), Number).filter(numb => numb == '-' ? 0 : numb).reduce( (a,b) => a + b, 0)

}


console.log(sumDigits(-10))

