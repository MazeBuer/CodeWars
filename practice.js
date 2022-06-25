/* create a function that takes 3 inputs, first 2 integers and check with 3rd input is first two are divisible by that number. 
3 arguments and the 1 and 2nd divisible by 3rd number. all positive non zero numbers, no strings
return true or flase 
p=3 and p=15 and p=5 ; false 
create a conditoanl statment where i have p1 and p2 % p3 === 0 */

function checkDivisability(n1,n2,n3) {
    if(n1 % n3 === 0 && n2 % n3 === 0) {
        return true
    }else {
        return false
    }
}

console.log(checkDivisability(3,9,3))