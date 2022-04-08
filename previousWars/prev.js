//1) as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//**** NOTE THIS IS NOT AN ARRAY, normal if, else if,else
function even_or_odd(n) {
    if(n % 2 === 0) {
      return "Even"
    }else {
      return "Odd"
    }
  }

/*2) given an integer or a floating-point number, find its opposite.
1: -1
14: -14
-34: 34 */

function opposite(number) {
  return -(number)
}
//3) Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
  if (bool == true) {
    return "Yes"
  }else if (bool == false) {
    return "No"
  }
}

//4) calculate the average
function findAverage(array) {
  if (array.length === 0) {
    return 0
  }
  let result = 0;
  for (let i=0; i<array.length; i++) {
    result +=array[i]  //adding result and array[i]
  }
  return result/array.length;
}
//5)  return the result of multiplying the values together
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(multi){
  return multi.reduce((a, b)=> a * b,1);
}
console.log(grow([1,2,3,4]))

//6) Give the sum of an array, but only sum of the positive integers

function positiveSum(arr) {
  return arr.reduce((a,b) => a + (b > 0 ? b : 0), 0);
}

console.log(positiveSum([1,2,3,-101]))

/*7) Sum of array*/

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum([10,20,30,'haha',-100]))

//8) We need a function that can transform a number into a string.
function numberToString (num) {
  return num.toString()
}
console.log(numberToString([1,2,3]))

/*9)Make a function that will return a greeting statement that uses an input; 
your program should return, "Hello, <name> how are you doing today?".*/
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

/*10) There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!*/
function betterThanAverage(classPoints, yourPoints) {
  let result = 0
  for (let i = 0; i < classPoints.length; i++) {
    result += classPoints[i]
  }
  result = result/classPoints.length
  return yourPoints > result
}

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

//11)create a function to convert string into number
function stringToNum(strng) {
  let string = parseInt(strng)
  return string
}
   //or
let stringToNum = strng => Number(strng)

//12) Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
  //or                   $40 a day  -   if            if            else
  function rentalCarCost(d) {
    if(d<3) return d * 40; // if rent less 3 days its normal rate
    if(7>d && d>=3) return (d*40 -20); //if rent more than 3 its $20 off total
    if(d>=7) return (d*40 -50); //if rent 7 or more days $50 off total
  }

  //13) Write a function which converts the input string to uppercase.
  function makeUpperCase(str) {
    return str.toUpperCase()
  }

//14) you are given a number and have to make it negative, if negative leave as negative
function makeNegative(num) {
  if (num > 0) {
    return -(num)
  }else {
    return num
  }
}
    //arrow
makeNegative = num => -Math.abs(num) //math.abs return absolute value
 //15) Complete the solution so that it reverses the string passed into it.
 function solution(str){
  return reverseStr = str.split('').reverse().join('')
}

//16) return hours, minutes, and seconds into miliseconds and add
function past(h, m, s) {
  return ( (h*3600) + (m*60)+ s)* 1000  //convert all to seconds than multiply by 1000 (to convert sec to milisec)
}

//17) Given an array of integers, return a new array with each value doubled (no map)
 /* PREP
  Parameters: Is it always an interger? are we going to be given any special characters? an empty arr ever?
  Return: return a new array with each value doubled
  Exaples: if given [2,3,4] should return [4,6,8] , ex. [4,5,6] => [8,10,12]
  Pseudo Code: Make a funciton that takes in an array
    map through the array and multiply each element by 2
    return */


 function makeDoubleArr(arr) {
  if (arr === undefined || arr.length === 0) {
      console.log('Array is invalid')
  }else {
     return arr.map(e => e*2)
  }
}
console.log(makeDoubleArr([2,4,6,'x']))

//  git commit --amend --date='2022-04-03'
// esc ; enter
//git push


/*18) Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.
** NOTE: filter uses 2 parameteres */

function removeEveryOther(arr) {
  return arr.filter( function(elem, index) {
    return index % 2 === 0
  })
}
// arrow
let removeEveryOther = arr => arr.filter( (elem, i) => i % 2 === 0)