/* Given two integers a and b, which can be pos or negative, find the sum of all the integers between and inlcuding them and return it. If the two numbers are equal return a or b. */

function getSum(a,b) {
    if (a == b) {
        return a
    }else if (a < b) {
        return a + getSum(a+1,b )
    }else {
        return a + getSum(a-1,b)
    }
}

/*This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

function accum(s) {
    return s.split('').map( (element, index) => ( element.toUpperCase() + element.toLowerCase().repeat(index) ) ).join('-')
}
    // we are splitting the string to an array. we create a new function in map with parameters using element (a,b,..) and index #. in the equation we get the first element as uppercase. add it with that element in lowerCase and repeat that element the number of times based on index #. so first would be 1 upper but no lower since index is 0. 