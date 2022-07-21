/*Complete the function/method so that it returns the url with anything after the anchor (#) removed. 
p: given a string (url), string may contain # or may not. 
r: return a portion of the string before the #; if no # return original string
e: 'www.codewars.com#about' -> 'www.codewars.com' ; 
p: turn string into array .split('') ; filter because i want to keep some of the same elements inside ; .indexOf(#); return before that index*/


function removeUrlAnchor(url) {
    return url.split('#')[0]  //spliting at # into two arrays of codewars.com and #about
}


// 'codewars.com#about'
// [c,o,d,e,w,a,r,s,.,c,o,m,#,a,b,o,u,t]

console.log(removeUrlAnchor('codewars.com#about'))
console.log('working')

function removeUrlAnchor(url){
    return url
    .split("")
    .slice(0, url.indexOf("#") === -1 ? url.length : url.indexOf("#"))
    .join("");
}