/* Your function takes in two arguments, 1. current father's age(year) and 2. current age of son(years).
Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old)
P: given number of years (positive)
R: return the differece for when dad adn son was twice the age. 
E: */

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (2 * sonYearsOld));
  }