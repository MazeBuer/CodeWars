/* Given teh number (n), populate an array with all numbers up to and including that number, but excluding zero.
P: will be given an integer; will integer always be positive? yes; 
R: return an array starting from 1 to n
E: 5 -> [1,2,3,4,5]
p: declare an empty array; create a for loop where i starts at i and is less than or equal to n; we will then push i into the array; then return the array */

let monkeyCount = n => {
    let mArray = [];
    for( let i = 1; i <= n; i++) {
        mArray.push(i)
    }
    return mArray
}

console.log(monkeyCount(25))