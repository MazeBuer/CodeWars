/*Write a function that when a given URL as a string, parses out just the domain name and returns it as as a string. 
given a string; www.domain.com; https://www.; http://www.; no empty string; always be a domain; 
return the domain in a string;
"http://github.com/carbonfive/raygun" -> domain name = "github"
"http://www.zombie-bites.com"         -> domain name = "zombie-bites"
"https://www.cnet.com"                -> domain name = cnet" */

function getDomain(str) {
    //replace a few of the beginning string (http and https and www) with empty string
    //split the string into an array based "."
    //return the first array since the beginning are now empty before we split
    return str.replace('https://', '').replace('http://','').replace('www.','').split('.')[0]
}

console.log(getDomain("http://github.com/carbonfive/raygun"), 'github')
console.log(getDomain("http://www.zombie-bites.com"), 'zombie-bites')
console.log(getDomain("https://www.cnet.com"), 'cnet')