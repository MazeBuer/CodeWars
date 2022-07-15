/* convert a string into an array of words
P: we will be given a string; will we need to test for anything else? will we be given an empty string?
R: return string into an array
E: 'Robin Williams' -> [Robin, Williams]
P: use split with space */

function stringToArray(string){
    return string.split(' ')

}