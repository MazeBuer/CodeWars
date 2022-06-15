/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearranging the digits to create the hist possible number. 
P: will it ever be a single digit integer? Yes, just return the digit. will there be multiple of same digits
R: return the integer with each digit set in descending order.
E: 42145 -> 54421 ; 123456 -> 654321
P: turn the integer into a stirng .toString() ; split() the string into an array ; .sort() i descending order ; .join() back into a string ; Number(  ) everything to turn back into a number */

function descendingOrder(n){
    let number = n.toString()
    return Number(number.split('').sort((a,b) =>b-a).join(''))
}


console.log(descendingOrder(6567))

