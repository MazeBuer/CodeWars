/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest numbers.
1) split string (' '). Make sure there is space (' ') because it will separte the - negatives from the numbers
2) sort (a,b) a-b highest to lowest
3) return the last and first index of the array
4) the last index will be .length-1
*/


function highAndLow(numbers) {
    let order = numbers.split(' ').sort( (a,b) => a-b,0)
    return order[order.length-1] + ' ' + order[0]
}