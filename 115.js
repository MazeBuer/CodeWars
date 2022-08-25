/* Deoxyribonucleic acid, DNA is the primay information storage molecule in biological systems. It is composed of four nucleic acids Guanine ('G'), Cytosine ('C'), Adenine('A'), and Thymine('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracial ('U').
Create a function which translates a given DNA string to RNA. 
P: will be given a string; will string ever be empty? no ; will it contain non DNA elements? no;
R: return the given string with 'T' replaced by 'U'
E: 'GCAT' -> 'GCAU'
P: split string into an array; replace anythign with 'T' to a 'U'; join string back */

let DNAtoRNA = dna => dna.replaceAll('T', 'U')


function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}

console.log(DNAtoRNA('UTTT'))