/*You will be given a list of strings. You must sort it alphabetically (case-sensitive, and baseed on the SSCII values of the chars) and then return the first value. The returned value must be a string, and have '***' between each of its letters. You should not remove or add elements from/to the array. 
P: will the parameter given be an arary? yes an array of strings. 
R: return the array as a string in alphabelitcal order and only the first word. *** should be inbetween each letter. 
E: ['hello','apple','take'] -> 'a***p***p***l***e***'
P: sort the array; at index 0 split the element string into an array. join the strings together with *** between them. */

let twoSort = s => {
    let array = s.sort()
    return array[0].split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
