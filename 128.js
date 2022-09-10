/* In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive. 
P: you will receive 2 parrameterse of numbers; will i need to test for non integer parameters? no; will the first parameter ever be bigger than the second? no;
R: return the length of integers between and including the 2 parameters excluding any integers contianing 5.
E: 1,6 -> 1,2,3,4,6 ; 10-16 => 10,11,12,13,14,16
P: loop thru each element and create a rule where any number % by 5 evenly would not be included; return the length of that result */

function dontGiveMeFive(start, end)
{
  // HELLO STREAMERS!
  //P: positive or negative number; 'start' and 'end'; inclusive
  //R: positive integer = count of numbers
  //E: dontGiveMeFive(4, 17) -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12
  //P: 
  //create variable holding count total
  //create loop, from 'start' to 'end', use <= because it's inclusive
  //if (number DOESN'T have a 5 in it), {add one to 'count'}
      //number doesn't have to remain a number, so can convert to String and use indexOf()
      //indexOf() returns -1 if the character is not present,
      //therefore we WANT a -1 value if '5' is not found in the string
  let count = 0;
    
  for(let i = start; i <= end; i++) {
    if(String(i).indexOf('5') === -1) {
      count++;
    }
  }
  return count;
}
console.log(dontGiveMeFive(6,20))