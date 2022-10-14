/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers. 
array; mix of numbers and string integers; no special characters or words; no empty; always mix;
returning sum of numbers - sum of strings; single value; 
[1,4,5,'2','7'] -> 10 - 9 = 1
[1,6,8,'2','1'] -> 15 - 3 = 12
[5,'2'] -> 5 - 2 = 3 */

function divCon(x){
    let numTotal = 0; //declare integer total
    let strNumTotal = 0; //declare string total

    for (const i of x) {   //loop thru i of array
        if (typeof i === "number") { //if number
            numTotal += i; //add all numbers
        } else {
            strNumTotal += Number(i); //else add all strings
        }
    }

    return numTotal - strNumTotal; //get total of integers and strings and subtract
}



console.log(divCon([1,4,5,'2','7']), '1')
console.log(divCon([1,6,8,'2','1']), '12')
console.log(divCon([5,'2']), '3')