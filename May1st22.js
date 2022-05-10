/* Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls comments. Your task is to write a function that takes a string and return a new string with all vowels removed. 'AEIOU'
1) We will be filtering out the vowels
*/

function disemvowel(str) {
    return str.split('').filter( (element) => !'aeiouAEIOU'.includes(element) ).join('')
} 