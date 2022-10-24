/* each dragon takes 2 bullets to take down. how many bullets are needed given a number of dragons.
2 parameters; both integers in number format; any string numbers? no; 
return a boolean value if number of bullets will take down dragons given
3 dragons -> 6 bullets
2 dragons -> 3 bullets
10 dragons -> 20 bullets */

let hero = (bullets, dragons) => bullets >= dragons*2

console.log(hero(10,5),"true")
console.log(hero(7,4), "false")
console.log(hero(4,5), "false")
console.log(hero(100,40), "true")
console.log(hero(1500,751), "false")
console.log(hero(0,1), "false")