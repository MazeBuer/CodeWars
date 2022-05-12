/* Americans are odd people: their bulidings the first floor is the ground floor adn there is not 13th floor.
Write a function that given a floor in the american system returns the floor in european system.
1st floor being replaced with ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, move down by two because ther are two ommitted numbers below them.
(negatives stay the same)
PREP
P: we are given +- whole integers. we will be receving american numbers and convert to european
R: return floor numbers on console
E: 1 -> 0, 5 -> 4, 15 -> 13
P: conditional. when 0 or less they are the same
then 1 -> 12 is -1 and 13 + is -2
*/

function getRealFloor(n) {
    if (n < 13 && n > 0) {
        return n - 1
    }else if (n > 12) {
        return n - 2
    }else{
        return n
    }
}

    // arrow function
let getRealFloor = n => n <= 0 ? n : n < 13 ? n-1 : n-2;