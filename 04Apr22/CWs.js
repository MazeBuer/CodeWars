//Given an array of integers, return a new array with each value doubled (no map)
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