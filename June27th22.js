function accum(s) {
    let str = s.split('')
    str.map( (elem,index) =>elem.toUpperCase() + elem.repeat(index).toLowerCase()).join('')
}

console.log(accum('abc'))