/* Wilson prime satisfy the following condition. let P represent a prime number.
THen ( (P-1)! + 1 / (P*P) ) should give a whole number. Your task is to create a function taht returns true if given number is a WIlson Prime.
P: will be given an integer, will we need to check for non integers? no; negative? yes
R: return true or false if number returned from equation is a whole number.
E: ( (5-1)! + 1 / (5*5)) = decimal # -> return false
P: if 'equation'% 1 === 0 */

function amIWilson(p) {
    // "The only known Wilson primes are 5, 13 and 563."
    return p==5 || p==13 || p==563
}
console.log(amIWilson(13))