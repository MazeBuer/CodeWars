/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed. 
ex. array [19,5,42,2,77] output should be 7.
1. we are adding sum of two smallest numbers of an array. Array must contain at least 4 integers
2. find function to identify the 2 smallest numbers, sort in order
3. add them together */

function sumOfTwoSmallestNumbs(numbs) {
    numbs.sort( (a,b) => a-b)
    return numbs[0] + numbs[1]
}

/* Complete a function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade. 
Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'          
1. finding the average of 3 numbers. a+b+c = d d/3
2. if and else if d = # */

function getGrade (a,b,c) {
    let average = ((a+b+c)/3)
    if (average >= 90) {
        return 'A'
    }else if (average >= 80) {
        return 'B'
    }else if (average >= 70) {
        return 'C'
    }else if (average >= 60) {
        return 'D'
    }else {
        return 'F'
    }
}

/*ATM machines allow 4 or 6 digit PIN codes and the codes only allow EXACTLY 4 or 6 digits. 
return true if PIN code is 4 or 6 and flase if anything else. */

function validatePin(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false
    }
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < 0 || pin[i] > 9) {
            return false
        }
    }
    return true
}


