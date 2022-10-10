/* For every good kata idea there seem to be quite a few bad ones! In this kata you need to check the provided array (x) for good ideas 'good' and 'bad'. if there are one or wo good ideas, return 'Publish' if tehre are more than 2 return 'I smell a series!' if there are no good ideas, as is often teh case, return 'Fail' 
P: will be given an array of strings; will array every be empty? no; will string contain anything other than 'good' or 'bad'? no;
R: return 'Publish' or 'Fail' if more than 2 retrn 'I smell a series!'
E: ['good','bad','bad'] 'Publish' -> ['bad','bad'] -> Fail
P: create a conditinal statement where i will filter 'good' and if the length is > 2 return 'I semll a series', > 0 return 'Publish' less than 0 return 'Fail'*/

// let well = x => {
//     if(x.filter( e => 'good'.includes(e)).length > 2) {
//         return 'I smell a series!'
//     }else if( x.filter( e => 'good'.includes(e)).length > 0) {
//         return 'Publish!'
//     }else {
//         return 'Fail!'
//     }
// }

let well = x => x.filter(e => 'good'.includes(e)).length > 2 ? 'I smell a series!' : x.filter(e => 'good'.includes(e)).length > 0 ? 'Publish!' : 'Fail!'

console.log(well(['good','bad','bad','bad']))