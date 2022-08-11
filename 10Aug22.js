/*Make a function that receives age, and return what they drink. 
Kids drink toddy, teens drink coke, young adults drink beer, adults drink whisky
kids = under 14; teens = under 18; young adult = under 21; adult = 21 older;
P: we will be given an integer (age);
R: return the statement depending on age given
E: 14 - Teens drink code ; 100 - adults drink whiskey
P: create a conditional statement with tenary notations. */

function peopleWithAgeDrink(old) {
    return old < 14 ? 'drink toddy' : old < 18 ? 'drink coke' : old < 21 ? 'drink beer' : 'drink whisky'
  };