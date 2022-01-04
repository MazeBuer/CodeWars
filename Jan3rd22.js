function isDivisible(n, x, y) {
    if(n % x === 0 && n % y === 0) {
      return true
    }else {
      return false
    }
    
  }
  
  //p: we are given 3 parameters, and they will always be positive integers. no negatives
  //R: return true/flase if n is divisble by x AND y
  //e: n=3 x=1 and y=3 -> true, beacuse n divisble evenly by 1 and 3
  //p: conditional if n % x === 0 AND n % y === 0 true.