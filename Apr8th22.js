/* 19) Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */

function correct(string) {
    return string.replace(/0/g, "o")
                 .replace(/5/g, "s")
                 .replace(/1/g, "i")
}

    // .replace(regexp , 'what you want') the g is global search which finds ALL matches instead of just the first


/* 20) You're writing code to control your town's traffic lights. You need a function to handle each change from green, 
to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a 
string representing the state the light should change to.

For example, update_light('green') should return 'yellow'. */

function updateLight(current) {
    if ( current == 'green') {
        return 'yellow'
    }else if ( current == 'red') {
        return 'green'
    }else {
        return 'red'
    }
}

// 21)  if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. 
//Therefore, the function should return 8. Find the difference of volumes
//finding absolute of the difference between 2 array volumes
function findDifference(a, b) {
    return Math.abs( (a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]) )
}
