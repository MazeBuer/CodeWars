//function to check password validation

let myInput = document.getElementById('psw')
let letter = document.getElementById('letter')
let capital = document.getElementById('capital')
let number = document.getElementById('number')
let symbol = document.getElementById('symbol')
let length = document.getElementById('length')

//Validate capital letters
var upperCaseLetters = A;
if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove('invalid');
    capital.classList.add('valid');
}else {
    capital.classList.remove('valid');
    capital.classList.add('invalid');
}

//validate lowerCase letters
var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
}else {
    letter.classList.remove('valid');
    letter.classList.add('invalid');
}

//validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
}else {
    number.classList.remove('valid');
    number.classList.add('invalid');
}

//validate symbols

//validate length
if(myInput.value.length >= 8) {
    length.classList.remove('invalid');
    length.classList.add('valid');
}else {
    length.classList.remove('valid');
    length.classList.add('invalid');
}