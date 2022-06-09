//7 KYU

/*1) Return the number (count) of vowels in the given string. We will consider a,e,i,o,u as vowels but not y. The input string will only consist of lower case letters and or space.
P: we will be given a string. Will it have integers? spaces? String of words with spaces. 
R: return total number of vowels in a string.
E: 'hello there how are you' -> 9 vowels
P: given a string so .split('') to turn into an array; we are given spaces so .split(' '); Since we want current element in array we use .filter(); filter out the vowels and .length to get the count. */

function getCount(str) {
    let vowelsCount = str.split('').filter( (w) => 'aeiouAEIOU'.includes(w)).length
    return vowelsCount
}

console.log(getCount('hello there'))

//we are looking thru 'aeiouAEIOU' and inculding only those inside w. 

/*2) Trolls are attacking your comment section!!! A common way to deal with this situation is to remove all the vowels from the trolls comments neautralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. 
P: Will be given a string; Will it have spaces? be empty? A string with words and spaces.
R: return the string without 'aeiou'
E: 'LOL Loser!' -> 'LL Lsr!'
P: turn string into an array .split(''); we are keeping some letters so .filter() is used; keep anything not including 'aeiou' */

let disemvowel = str = str => str.split('').filter( w => !'aeiouAEIOU'.includes(w)).join('')

console.log(disemvowel('what a loser'))

            //REDOOOOO
/*3) In this task you are asked to square every digit of a number and concatenate them. For example, if we run 9119 thru the function, 811181 will be returned because 9^2 is 81 1^2 is 1. 
P: will be given an interger
R: return an integer of every number in the integer to be squared
E: 9119 -> 811181
P: .toString to convert to string? or just Math.pow; loop thru; Number() turn back into a number; concatnate*/

// 1)concatnate each element 
// 2) convert integer into a string
// 3) map function to multiply n*n
// 4) .join()
// 5)turn the string into a number


function squareDigits(num) {
  return Number(('' + num).split('').map(val => val*val).join(''));
}
//           #5     #1       #2          #3                   #4
console.log(squareDigits(224))

