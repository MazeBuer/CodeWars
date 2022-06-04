/* Your function takes in two arguments, 1. current father's age(year) and 2. current age of son(years).
Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old)
P: given number of years (positive)
R: return the age where the father was twice as old as the son.
E: father y. 24 adn son y 12 -> true
P: let father/2 == son */

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }