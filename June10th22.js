/* 4) In this assignment you are given a strng of space spearated numbers, and have to return the hightest and lowest number.
P: given a string of numbers separted by spaces
R: return 2 indexes with hightest and lowest number.
E: ('1 2 4 8 -3') -> '-3' '8'
P: .reduce() to put in order, n[0] and n[-1]; since i am sorting i will use .sort() */

function hightAndLow(numbers) {
    let n = numbers.split(' ').sort((a,b) => a-b,0)
    return n[n.length - 1] + ' ' + n[0]
}

console.log(hightAndLow('1 3 -2 6'))


