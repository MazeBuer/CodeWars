/* In a small town the population is p0=1000 at the beginning of a year.The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p=1200 inhabitants? */
//p: given p0 inital population and adding 'percent' and 'aug' (50) people per year.  p0: population; per=%; aug=increase pop per year; p=new population
//r: return the n year in which p0 => p
//e: p0=1000; percent=2%; aug=50; p=1200 -> takes 3 years to get p0 to >= p
    // p + (p*percent)/100 + aug
//p

function nbYear(p0, percent, aug, p) {
    for (let years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }