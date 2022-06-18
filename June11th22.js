/* Your task is to create a function that does four basic mathematical operations.
The function should take three agruments - operators(string/char), value1(number) , value2(number), value3(number). The function should return the result of numbers after applying the chosen operation.
P: parameter 1 will be a string of a charcter +-* / that determines the math equation. then it will take in 2 numbers that will be +-/* to each other
R: return answer in integer
E: ('+',3,5) -> 8 ; ('-', 9,2) -> 7
P: concatenate all values */

let basicOp = (operation, value1, value2) => {
    return operation == '+'  ? (value1+value2) : operation == '-'  ? (value1 - value2) : operation == '*'  ? (value1 * value2) :  (value1/value2)
}

console.log(basicOp('+',2,4))

//using switch case

function basicOp (operation, value1, value2) {
    switch(operation) {
        case '+': 
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1/value2;
        default:
            return 0;
    }
}