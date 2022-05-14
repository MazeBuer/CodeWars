/* Given a string of words, return the length of the shortest word(s).
String will never be empty.
PREP
P: a string that will always have words
R: return the shortest word's length
E: 'Let's travel abroad shall we'
P: 1) .length for each word
2) sort the words in order a.length - b.length
3) return length of index[0]
*/

function findShort(s){
    let word = s.split(' ').sort( (a,b) => a.length - b.length)
     return word[0].length
 }