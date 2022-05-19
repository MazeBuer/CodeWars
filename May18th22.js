/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
P: interger > 0
R: return the sum of consecutive numbers from given num
E: sum(8): 1+2+3+4+5+6+7+8 = 36
P: needs to loop, initialization: starts at 0, conditional: stops when i <= num, finilization: i++*/

var summation = function (num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i 
    }
    return sum
}



