/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order. 
P: Will be given a string? only integers? negative? It will be an integer (not string or arry) of a positive 
R: return the reverse order of the integer in the form of an array. 
E: 16849 -> [1,6,8,4,9]
P: Array.from() to turn an integer into an array. .reverse() to reverse the order */

let digitize = n = n => Array.from(String(n), Number).reverse()