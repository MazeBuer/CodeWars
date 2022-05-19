/* Complete the function that takes a non-negative integer n as an input, and returns a list of all the powers of 2 with teh exponent ranging from 0 to n.
P: will be given positive integers
R: return the array with power of eac element for every number between 0 and n 
E: n = 0 ==> [1] n=1 ==> [1,2] ; n=2 ==> [1,2,4]
P: loop thru n and create array ^2 */

function powersOfTwo(n){
    let array = [];
    for(let i=0; i <=n; i++) {
       array.push(2**i)
      }
      return array
  }