/*Usually when you buy something, you're asked wheather your credit card number, phone number, or answer to your secret question is still correct. However, since someone could look over your shoulder, you dont want that to show on your screen, instead we mask it. Write a function maskify, which changes all but the last four characters into a '#'. */
//p -> will be given a string; will i account for empty strings? yes ; will there be multiple words or just one; multiple; will we # spaces as well? yes     empty, number, and multiple words; spaces
//r -> return the string with everything except the last 4 as #. the last 4 characters will be the same
//e -> '1234567' : '###4567' -> 'hello there' : '#######here'
//p -> will get the length of a string and .fill() # at index 0-> .length-4?; .join('') at the end

function maskify(cc) {
    let array = cc.split('')
    for(let i=0; i<=array.length; i++) {
        if(array.length > 4) {
            return array.fill('#', 0, cc.length-4).join('')
        }else {
            return array.join('')
        }
    }
}

console.log(maskify('ere'))