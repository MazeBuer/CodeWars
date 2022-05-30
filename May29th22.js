/* Return the respective human, cat, and dog years. 
Cat Years: 15 cat years for the first year ; +9 cat years for the second year ; +4 cat years for each year after
Dog Years: 15 dog years for the first year ; +9 dog years for the second year ; +5 dog years for each year after
P: we will be given a year
R: return the dog, cat and human years corespending with that year
E: year = 2 [2, 24, 24] ;
P: find the equation to return the correct animal year, retur in array [human, cat, dog]*/

var humanYearsCatYearsDogYears = function(humanYears) {
    let num = humanYears
    let human = num
    let cat = num == 1 ? 15 : num ==2 ? 24 : ((num-2)*4)+24
    let dog = num == 1 ? 15 : num ==2 ? 24 : ((num-2)*5)+24
    return [human, cat, dog] 
  }

