/* Given a number as an input, print out every integer from 1 to that number. However, when the interger is divisible by 3, print out 'fizz'; when it's divisible by 5, print 'buzz'; when its divisible by both 3 and 5, print 'fizzbuzz'
//num ; post over 1; includes num
//3 -> 'fizz' and 5 -> 'buzz'; fizzbuzz'; 
// num = 15; -> 1,2,'fizz'',4,'buzz','fizz',7,8,9,'buzz',11,'fizz',13,14,'fizzbuzz'; return by consol each number
num = 6; -> 1,2,fizz,4,buzz
// */

// function isFizzBuzz (num) {
// //loop thru starting from 1 -> num
//     for(let i = 0; i <= num; i++) {
// //return 'fizz' 'buzz' 'fizzbuzz' or num
// //if num % 3 === 0 and num % 5 === 0 -> 'fizzbuzz'
//         if(i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz')
//             //if only num % 3 === 0 -> 'fizz'
//         }else if (i % 3 === 0 ) {
//             console.log('fizz')
//             //if only num % 5 === 0 -> 'buzz'
//         }else if (i % 5 === 0) {
//             console.log('buzz')
//             //any other number console.log num
//         }else {
//             console.log(i)
//         }
//     }

// }

//Optimized Code
let isFizzBuzz = num => {
    for(let i=1; i<= num; i++) {
        console.log(i % 3 === 0 && i % 5 === 0 ? 'Fizzbuzz' : i % 3 === 0 ? 'fizz' : i % 5 === 0 ? 'buzz' : i)
    }
}

//write down EVERY pseudocode step inside the function before writing code. Then fill in the code
//console.log each answer above and only call the below
isFizzBuzz(5)
isFizzBuzz(9)
isFizzBuzz(20)