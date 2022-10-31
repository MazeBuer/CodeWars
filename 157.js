/* Given a number n, return the number of positive odd numbers below n 
given a number; positive;
return single value of odd numbers between 0 to n
7 -> 3 because 1,3,5
15 -> 7 because 1,3,5,7,9,11,13
*/

function oddCount (n) {
//declare an empty array
//loop thru array between 0 and n (not counting n)
//push elements that are not even 
//return length of new array
    const array = [];
    for(let i=0; i < n; i++) {
        if(i % 2 !== 0) {
            array.push(i);
        }
    }
    return array.length;

}

console.log(oddCount(7), '3')
console.log(oddCount(15), '7')