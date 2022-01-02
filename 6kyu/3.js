/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
P: you will be given an array of 10 single digit integers ; will the array ever be empty or less than 10? will i be given non integers to account for? Only single digit and always 10 integers
R: return the array in the order given as a string with added () around the first 3 and a - between 6th element and 7th element. do this by concatnating the string together. */

function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

//Alternative Ways

function createPhoneNumber(numbers) {
    return numbers.reduce( (p,c) => p.replace('x',c), "(xxx) xxx-xxxx")
}

function createPhoneNumber(numbers) {
    let format = "(xxx) xxx-xxxx";
    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i])
    }
}