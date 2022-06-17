/* In DNA strings, symbols 'A' and "T" are complements of each other, as 'C' and 'G'. Your function receives one side of the DNA string, (except for Haskell); youll need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell)
P: we will be given a string that is never empty. Will there be string with integers to test? with there be strings with anything other than 'ATGC'? 
R: return the complement of a string given in the form of a string as well
E: 'ATTGC' -> 'TAACG' ; 'GTAT' -> 'CATA'
P: split the string into an array. create a loop going thru each element, create a conditional if e == 'A' return 'T' ; maybe map? */

function DNAStrand(dna) {
    let dnas = dna.split('')
    console.log(dnas)
    let newarray = []
    for(let i = 0; i < dnas.length; i++) {
        if(dnas[i] == "A") {
            newarray.push("T")
        }else if (dnas[i] == "T"){
            newarray.push("A")
        }else if (dnas[i] == 'C') {
            newarray.push("G")
        }else {
            newarray.push("C")
        }
        
    }
    return newarray.join('')
}

console.log(DNAStrand("ATTA"))
console.log('hello')