/*Your task is to convert a string sentence to have every letter starting with a capitalized letter. 
PREP
P: We will only be given a string sentence. No integers or other non strings.
R: 
E:  1) have a string and split into an array
2) create equation .map to .toUpperCase at index 0 for each word + remainer of the word using .slice()
3) join to total back to a string
*/

String.prototype.toJadenCase = function() {
    return this.split(' ').map( function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}