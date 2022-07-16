/* Create a function that gives a personalized greeting. This function takes two parameters: name and owner
Use conditionals to return the proper message.
P: We will be given 2 names ; one of the person and one of the owner; 
R: return 'Hello boss' if name and owner is the same ; return Hello guest if anything else
E: 'Maze' 'Maze' -> 'Hello boss' ; 'Rob' 'Maze' - > hello guest
P: conditional statment where name and owner == return 'hello boss' else 'hello guest'
*/

function greet (name, owner) {
    if(name == owner) {
        return 'Hello boss'
    }else {
        return 'Hello guest'
    }
}
