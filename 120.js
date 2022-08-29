/* Create a method to see whether the string is All CAPS.
P: will be given a string of words; will the string ever be empty? no; will i need to check for characters in the string? no;
R: return true or false 
E: 'HelLo WORLD' -> flase ; 'HELLO WORLD' -> true
P: we will will string into an array; look thru every element with .every() and test if ture; */

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
}

