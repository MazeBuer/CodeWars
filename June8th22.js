/* the first input array is the key to the correct answers to an exam, like ['a','c','d','b']. The second one contains a student's submitted answers. 
The two arrays are not empty and are the same lenght. Return the score of this array of answers, giving +4 for each correct, and -1 for each wrong, and +0 for each blank. if score < 0, return 0
P: will be 2 arrays of 4 elemetns each. each element wither contains 1 letter or empty string.
R: return +4 for each same element in index #, -1 for diff element in index #, and 0 for empty element in index.
E: */

function checkExam(array1, array2) {
    let grade = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            grade += 4
        }else if (array2[i] == '') {
            grade += 0
        }else {
            grade -= 1
        }
    }
    if(grade < 0) {
        grade = 0
    }
    return grade
}

console.log(checkExam(['a','b','c','d'], ['a','c','c','d']))
