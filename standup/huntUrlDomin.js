/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. Example: 
domainName('https://github.com/carbonfive/rayhgun) == 'github'
domainName('http://www.zombie-bites.com') == 'zombie-bites'
domainName("https://www.cnet.com") == "cnet"

//given a string of url; 1 url string; always url format; 
//return domain name -> string; 
*/

function getDomain (url) {
    
    //replace anything i dont want at the beginning - replace method - https://,http://, www - with empty string
    return url.replace('https://', '').replace('http://', '').replace('www.','').split('.')[0]
    //split method with . as separator string into an array
    
    //call index [0] 
    

}

console.log(getDomain('https://github.com/carbonfive/rayhgun'), 'github')
console.log(getDomain('http://www.zombie-bites.com'), 'zombie-bites')
console.log(getDomain('https://www.cnet.com'), 'cnet')