/*Write a function to convert a name into initials. This takes two words with only one space between them. Output should be two capital letters with a dot separating them.
P: will be given a string with two words, separated by a single space. 
R: return the first letter of each word separated by a .
E: Haward Gill -> H.G
P: turn string into array .split(' ') ; separate by space ; get the index 0 for each word ; */

function abbrevName(name){
  let abbr = name.split(' ')
  return abbr[0][0].toUpperCase() +  '.' + abbr[1][0].toUpperCase()
}


console.log(abbrevName('hank hill'))
