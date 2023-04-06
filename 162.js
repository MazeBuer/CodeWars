/* Write a function that takes 2 agruments
1. current father's age (years)
2. current age of his son (years)
Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater than 0, no matter if it was past or future. 
P: take in 2 values that are integers; will the values always be whole numbers? yes; value always positive? yes
R: returning a single value integer;
E: father: 43 son: 5 ->  33
P: sons age multiplied by the age difference we want. (2) and minus the dads age */

function twiceAsOld (dad, son) {
    return Math.abs( (son*2) - dad)
}

console.log(twiceAsOld(43,5))