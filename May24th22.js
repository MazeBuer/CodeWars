// Complete the square sum function so that it squares each number passed inot it and then sums the results togeter. 
/*P: Will it only be integers? Numbers passed will be an array of integers, no strings
R: Return the square of each integer in the array and sum the total
E: [1,2,2] -> 2+4+4 = 9
P: get an array and .map() to create a new array with equation of arr + Math.pow(b,2)
*/

function squareSum(numbers){
    return numbers.reduce( (a,b) => a + (Math.pow(b,2)),0)
  }