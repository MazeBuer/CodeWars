/*Remove the space from the string, then return the resulting string
P: will be given a string with spaces
R: return a string without the spaces
E: 'Hello There' -> 'HelloThere'
P: split, since we are keeping some of the elemnts and removing others, we will use filter()
filter out .includes('') then join. 
*/
function noSpace(x){
    let newarr = x.split(' ').filter((e) =>e.includes('')).join('')
    console.log(newarr)
  }

 