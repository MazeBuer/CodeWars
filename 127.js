/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. if the lengths word is even, return the middle 2 characters. 
P: will be given a string with a word
R: return the middle 1 character for odd length and middle 2 character for even length words. 
E: 'test' -> 'es' ; 'testsing' -> 't'
P: conditional statement where if odd you divide length by 2 adn get the index of new length -1; if even divide length by 2 and return index and length/2 and length/2+1 */

function getMiddle(s) {
    let middle = s.length/2
  if(s.length % 2 == 0) {
    return s.slice(middle - 1, middle + 1)
  }else {
    return s.charAt(Math.floor(middle))
  }
}

console.log(getMiddle('heuklo'))