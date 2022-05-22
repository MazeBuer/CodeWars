//Code Wars 8Kyu

/*The first century spans from the year1 up to and including the year 100, the second century - from the year 101 up to and including the year 200,etc. Given a year, return the century it is in. 
P: Will we be given a string? intergers? negatives? anything other than a number?
Only be given positive integers
R: We will return the century number of a year. 01-100s
E: 1903 -> 20 century ; 1700 -> 17 century
P: math.floor / 100 + 1 to get the century it is on. For years ending in 100's if statment just Math.floor/100 */

function century(year) {
    let centuryNumber = Math.floor(year/100)
     return year % 100 == 0 ? centuryNumber : centuryNumber + 1;
   }