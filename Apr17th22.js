/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
ex. 42145 -> 54421 , 145263 -> 654321*/

function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

