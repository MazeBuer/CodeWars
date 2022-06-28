function filter_list(l) {
    return l.filter(str =>  typeof str !== 'string')
  }
  
  
  //p: integers and strings in an array; non-negtaive; 
  //r: returning new array with only intgers given
  //e: [1,2, 'a','b','asg',13] -> [1,2,13]
  //p: filter out stirngs, filter anything that has typeof == 'string'
  
  console.log(filter_list([1,2,'a']))