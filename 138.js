/* Write a function that accepts an array of 10 integers (between 0 and 9), that retuns a string of those numbers in the form of a phone number. 
P: array of 10 integers; 0-9; will we need to test for empty parts in teh array? no; 
R: [1,2,3,3,4,5,3,4,5,6] (123) 345-3456
P: return a concatated version of the array */

// let createPhoneNumber = numbers => '(' + numbers[0]+ numbers[1] + numbers[2] + ')' + ' ' + numbers[3]+ numbers[4] + numbers[5] + '-' + numbers[6]+ numbers[7] + numbers[8] + numbers[9]


function createPhoneNumber(numbers){
  let format = '(xxx) xxx-xxxx';

  for(let i = 0; i<numbers.length; i++) {
    format = format.replace('x', numbers[i])
  }
  return format
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,6,5,3]))