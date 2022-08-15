/* Create a function which answers the question 'Are you playing banjo?'. If your name starts with the letter 'R' ro lower case 'r', you are playing banjo! The function takes a name as its only argument, and returns one of the following strings. 
name + ' plays banjo' ; name + ' does not play banjo'
P: we will be given a name in a string. will be case sensitive? yes, empty string? no
R: return name + phrase; if starts with r (lower or upper case) return 'plays banjo' anything else return other phrase
E: ramond -> ramond plays banjo
P: turn string into an array; create a conditional statement wehre index 0 of array starts with r/R */

function areYouPlayingBanjo(name) {
    let array = name.split('')
    return array[0].toLowerCase() == 'r' ? name + ' plays banjo' : name + ' does not play banjo'
}

console.log(areYouPlayingBanjo('Raul'))