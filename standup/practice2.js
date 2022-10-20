/* array or list of sheet, some shee missing from place, count # of sheep present. check for not sheeps
array of sheep, no integers, no empty arrays, 
//returning number of sheep present, total should
//['true',false']
// conditioonal in a loop where when count true in the array and return the number */

function countSheet(sheep) {
    let sum=0;
    for(let i = 0; i <= sheep.length; i++) {
        if(sheep[i] === true) {
            sum += sheep[i]
        }
    }
    return sum
}

console.log(countSheet([true,true,false,true,false]))