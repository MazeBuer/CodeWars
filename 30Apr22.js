/* Implement a function that accepets 3 integer values a,b,c. The function should return true if a triangel can be built with the side of given length and flase if any other case. */

function isTriangle(a,b,c) {
    return a + b > c && a + c > b && c + b > a;
}

/* Write a function that checks if a given string(case insensitive) is a palindrome.
1) compare x with reverse
2) name a new array and split into an array ('')
3) .reverse(''), .join('')
5) compare x with new array */

const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }

