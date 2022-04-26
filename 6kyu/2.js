/* The like button
Implement a function which takes an array containing the names of people that liked an item. It must return the display text as shown in the example:
P: we will be given an array of names. Will it ever be empty? Yes if empty display 'no one likes this' ; will i need to account for non strings? No only strings will be in the array
R: return a phrase with the name of the person in the array returned into the phrase. 4 different types.
E: [] -> 'no one likes this' 
   ['peter'] -> 'Peter likes this'
   ['peter','alex'] -> Peter and Alex likes this
   ['max','peter','alex'] -> Max, Peter and Alex like this
   ['Alex,Max,'Peter',"Jabob"] => 'alex, max and 2 others like this
P: we will loop thru the array of names. create a conditional that `{array[0]} likes this` */

function likes(names) {
    let num = 0;
    for(let i = 0; i <= names.length; i++) {
        if (names.length === 0) {
            return (`no one likes this`)
        }else if(names.length === 1) {
            return (`${names[0]} likes this`)
        }else if(names.length === 2) {
            return (`${names[0]} and ${names[1]} like this`)
        }else if(names.length === 3) {
            return (`${names[0]}, ${names[1]} and ${names[2]} like this`)
        }else {
            let num = names.length - 2
            return (`${names[0]}, ${names[[1]]} and ${num} others like this`)
        }
    }
}

console.log(likes([]))