function accum(s) {
    let str = s.split('')
    str.map( (elem,index) =>elem.toUpperCase() + elem.repeat(index).toLowerCase()).join('')
}

console.log(accum('abc'))


function digital_root(n) {
    let num = Array.from(String(n), Number)
    let a = num.reduce((a,b) => a+b,0)
    let answer = Array.from(String(a),Number)
    for(let i=0; i <= answer; i++) {
      if(answer.length > 1) {
        return num.reduce((a,b) => a+b,0)
      }else {
        return answer
      }
    }
    
  }

  console.log(digital_root(567))