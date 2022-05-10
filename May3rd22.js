/*Square every digit of a number and concatnate it.
1)concatnate each element 
2) convert integer into a string
3) map function to multiply n*n
4) .join()
5)turn the string into a number
*/

function squareDigits(num) {
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}
//           #5     #1       #2          #3                                       #4

