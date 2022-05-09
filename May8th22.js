/* When provided with a number between 0-9, return it in words
PREP
P: will only get numbers between 0-9
R: return the word
E: 1 -> one
P: use conditionals using switch keyboard
*/

function switchItUp(number) {
    switch(number) {
        case 9:
            return 'Nine'
            break;
        case 8:
            return 'Eight'
            break;
        case 7:
            return 'Seven'
            break;
        case 6:
            return 'Six'
            break;
        case 5:
            return 'Five'
            break;
        case 4:
            return 'Four'
            break;
        case 3:
            return 'Three'
            break;
        case 2:
            return 'Two'
            break;
        case 1:
            return 'One'
            break;
        default:
            return 'Zero'
    }
}


