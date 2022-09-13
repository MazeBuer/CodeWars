/* In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with 5 in it. The start number will be smaller than larger number */

function dontGiveMeFive(start, end){
    let res = [];
    for (let i = start; i <= end; i++) {
      if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
  }

console.log(dontGiveMeFive(1,10))