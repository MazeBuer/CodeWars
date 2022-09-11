/* Create a function with two arguments that will return an array of the first n multiplies of x. Assume both given numbers and the number of times to count willb e postive numbers greater than 0. Return the results as an array or list.
p: will be given 2 integers as parameters; always positive above 0; 
R: return an array with multiples of the first parameter the 2nd parameter amount of times;
E: (2,5) -> [2,4,6,8,10] -> multiples of 2 going 5xs 
P: declare an empty array (since we do not have an array and will need one); create a loop between x and x*n; return all integers that go into x even amount of times (no remainder) */

let countBy = (x,n) => {
    let z=[];
    for (let i = 1; i <= n; i++) {
      z.push(x*i);
    }
    return z
}

console.log(countBy(2,10))
