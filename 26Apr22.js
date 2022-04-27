/* Return the number (count) of vowels in the given string. ( a,e,i,o,u). The input would consist of lower case letter and/or spaces. 
1) turn a string into an array
2) finding multiple elements of specific letters using filter. 
3) inside the filter equation find vowels using .includes()
4) get the count with .length at the end of .filter()
5) join back to string */


function getCount(str) {
    return str.split('').filter( c => 'aeiouAEIOU'.includes(c) ).length;
}
