/* Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. if n< 0 or m < 0 return 0
P: given 2 integer paramgers; may be less than 0;
R: return multiple of n and m to get # of pages. if n or m is less than 0 return 0
E: n=4, m=6 -> 24 ; n= -1  m=5 -> 0
P: multiply n and m ; conditional if any are less than 0 */

// function paperwork(n, m) {
//   if(n < 0 || m < 0) {
//     return 0;
//   }else {
//     return n*m
//   }
// }

let paperwork = (n,m) => n < 0 || m < 0 ? 0 : n*m

console.log(paperwork(1,-4))