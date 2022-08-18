/* We need a simple function that determines if a plural is needed or not. It should take a number, and return true if plural should be used with that number or flase if not. This would be useful when printing out a string such as 5 mintues, 14 apples, or 1 sun. 
P:will be given a integer . will string be empty? yes; will need to test for invalid strings return false;
R: return true or false if item is plural 
E: '3 ' -> true ; '1' -> false
P: use a conditioal statment to test if first element is a integer greater than 1; */

let plural = n => n < 1 || n > 1;

console.log(plural(0))