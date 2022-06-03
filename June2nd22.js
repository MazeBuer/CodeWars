/* You like building blocks. You especially like building blocks that are square. And what you even like more is to arrange them into square of square building blocks. However, sometiems you cant arrange them into a square, instead you end up with an ordinary rectangle! YOu just have to check if your number of building blocks is a perfect square. Given an integer number, determine if it's a square number.
P: Will we be given negatives? Will we be give string numbers? Only integer (not string) + or -
R: return true or false if then number provided is squared (can it be square rooted evenly?)
E: -1 -> false ; 4 -> true ; 25 -> true
P: find an equation and conditioan for true or false. Math.sqrt() to find square root and if % 1 == 0 that means the number returned is a whole number. */


var isSquare = function(n){
  return Math.sqrt(n) % 1 == 0;
}