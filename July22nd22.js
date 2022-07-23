/*Timmy and Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has a an even numberr of petals and the other has an odd number of petals it means they are in love. 
Write a function that will take the number of petals of each flower and return true if they are in love or false.
P: number representing pedals
R: ture / false ; if one flower is even and other is odd
E: 3petals and 2 petals = true; 2petals and 4petals = false;
P: conditional with && , % 2 === 0 and !%2 === 0 */

function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true
    }else if (flower2 % 2 === 0 && flower1 % 2 !== 0) {
        return true
    }else {
        return false
    }
}

  console.log(lovefunc(3,4))

  
// Short code

function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 == 1
}