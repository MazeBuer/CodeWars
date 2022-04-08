/*18) Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.
** NOTE: filter uses 2 parameteres */

function removeEveryOther(arr) {
    return arr.filter( function(elem, index) {
      return index % 2 === 0
    })
  }
  // arrow
  let removeEveryOther = arr => arr.filter( (elem, i) => i % 2 === 0)

