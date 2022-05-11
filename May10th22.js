/* Given a triangle of consecutive odd numbers, calculalte the sum of the numbers in the nth row of this triangle (starting at index 1).
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
1 --> 1     2 -- > 3 + 5 = 8
1) nth row is adding each number of the row it is on from the triangle. ex. 2nd row is 3 + 5, 3rd row is 7+9+11
2) find the pattern!!
3) the sum of each row is the row # cubed.
ex. 1^3 = 1
row 2^ 3 = 8
row 3^3 = 27
*/

function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}

