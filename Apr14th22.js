//Write a function called repeatStr which repeats the given string string exactly n times.
function repeatStr (n, s) {
    return s.repeat(n)
  }
   //arrow
   repeatStr = (n,s) => s.repeat(n)

//Can you find the needle in the haystack? Write a function findNeedle() that takes an array full of junk but containing one "needle". After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle

function findNeedle (haystack) {
    return 'found the needle at position' + haystack.indexOf('needle')
}

//arrow
findNeedle = (haystack) => 'found the needle at position' + haystack.indexOf('needle')

//Given an array of ones and zeroes, convert the equivalent binary value to an integer. Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);