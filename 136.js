/* Create a function where if the value given is divisilble by 3 console.log fizz and if by 5 console.log buzz and if by both console.log fizzbuzz.
P: will be given an integer value; can the value be negative? yes; will i need to test for non-integer parametes? no
R: 6 -> fizz ; 10 -> buzz ; 15 -> fizzbuzz
P: create a function declare; create a conditional statement where the value will return fizz, buzz, or fizzbuzz */

let fizzBuzz = x => x % 3 == 0 && x % 5 == 0 ? 'fizzBuzz' : x % 3 == 0 ? 'fizz' : x % 5 == 0 ? 'buzz' : 'neither'

console.log(fizzBuzz(3))