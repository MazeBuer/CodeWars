/* Complete the function that takes two integers (a,b where a<b) and return an array of all integers between the input parameters, including them. 
P: we will be given 2 integer parameters ; the parameters will always be a number ; a will always be less than b
R: return the numbers between and including the parameters given in an ARRAY;
E: a=1 b=5 -> [1,2,3,4,5] ; a=3 b=6 -> [3,4,5,6]
P: 
*/

function between(a, b) {
    let array = [] //declare an empty array
    for (let i=a; i <=b ; i++) {  //the parameters which will start at a and end at b
        array.push(i)  // in the empty array push in all the i starting from a to b
    }
    return array  //return the new array filled in 
}

console.log(between(1,5))
