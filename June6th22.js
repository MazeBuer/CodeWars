/* An isogram is a word that has no repeating letters, consecutive or non-consec. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
P: Will we be given numbers in strnig? Only strings? Empty string? We will be given a string of letters or an empty string.
R: return true or flase if a string does not havae more than one same character. Return true if string is empty. 
E: 'aba'-> false ; 'hi' -> true ; 'moOse' -> false
P: split('') string to make an array. Loop thru array and check if any letters repeat. */

function isIsogram(str) {
    let string = str.toLowerCase().split('')
      return string.every( (c,i) => string.indexOf(c)==i)
}


function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
}