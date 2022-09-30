/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
P: will be given an array of integers; 0-9; 10 digits;
R: return array in order in format (123) 123-1234
E: [1,2,3,4,5,6,7,8,9,0] -> (123) 456-7890
P: first define the format, declare a variable where x will in inputted to represent the numbers in the correct format; we will loop thru the elements and replace x with each element in the given order */

let createPhoneNumber = numbers => {
    let number = '(xxx) xxx-xxxx'
    for (let i=0; i<numbers.length; i++) {
        number = number.replace('x', numbers[i])
    }
}

//it will be the format and replace each 'x' with the looped thru elements numbers[i] 