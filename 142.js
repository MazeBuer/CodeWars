/* You probably know the 'like' system from Facebook and other pages. People can 'like' blog posts, pictures or other items. We want to cretae the text that should be dispalyed next to such an item.
Implement the function which takes an array contianing the names of people that like an item. It must return the display text as shown in teh example. 
p: will be given an array of names; array can be empty or contain many names; 
r: return the phrase depending on number of names present. 
e: empty array -> 'no one likes this'
   1 name -> 'Peter likes this'
   2 names -> '1 and 2 like this'
   3 names -> '1, 2 and 3 like this'
   4+ names -> '1,2 and X others like this'
p: create a conditional statement where the length determines the phrase used. */

// let likes = names => {
//     if(names.length >= 4) {
//         return `${names[0]}, ${names[1]} and 2 others like this`
//     }else if (names.length == 1) {
//         return `${names[0]} likes this`
//     }else if(names.length == 2) {
//         return `${names[0]} and ${names[1]} like this`
//     } else if (names.length == 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     }else {
//         return 'no one likes this'
//     }
// }



let likes = names => names.length >= 4 ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this` : names.length == 1 ? `${names[0]} likes this` : names.length == 2 ? `${names[0]} and ${names[1]} like this` : names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : 'no one likes this'

console.log(likes(['peter', 'jane', 'sally', 'bob', 'ramey', 'tamy']))