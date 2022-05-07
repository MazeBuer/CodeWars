/*Consider an array/list of sheep whre some sheep may be missing form their place. We need a function that counts thenumber of sheep present in the array (true means present)
P: we will be given an array of booleans, will we be given anything else? yes
R: we will return the number of 'true' from the array
E: [true,true,false,true] -> 3
P: we will do a loop. initaization: i = 0; condition: i < array.length; final exp: i++ 
in teh loop we will do a condition if array[i] == true {then num = num+1}. then return num */

function countSheeps(arrayOfSheep) {
    let num = 0
    for(let i =0; i < arrayOfSheep.length; i++) {
        if(arrayOfSheep[i] === true) {
            num++
        }
    }
    return num
}