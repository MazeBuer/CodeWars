/* altERnaTIng cAsE <=> ALTerNAtiNG CaSe
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world" */

String.prototype.toAlternatingCase = function () {
    return this.split('').map( a => a === a.toUpperCase() ? a.toLocaleLowerCase() : a.toUpperCase()).join('')
}
    // split the string into an array. create an equation using map. One parameter where if a === uppercase than return a.toLowerCase. If not then return a.toUpperCase. Then .join('') back into a string