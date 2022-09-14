/*Create a function with two arguments that will return an array of the first n multiples of x. 
P: will be given 2 integers; positive; 
R: return an array starting from x including multiples of x and ending at x*n
E: [2,5] -> 2,4,6,8,10
p: declare an empty array; create a loop stopping at x*n; use push method to push the loop into empty array declared. */

function countBy(x, n) {
    let array = [];
    for(let i=1; i <= n; i++) {
        array.push(x * i)
    }
    return array;
}

console.log(countBy(2,5))