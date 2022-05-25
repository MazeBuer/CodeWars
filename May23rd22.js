/*Because Nathan knows its important to stay hydrated, he drinks 0.5 liters of water per hour of cycling. You get given the time in hours and you need to return the numbers of liters Nathan will drink, rounded to the smallest value. 
P: we will be given time (integer) and return liters (integer)
R: return time multiplied by liter (0.5) and math.floor to round down 
E: time: 3 ---> liters = 1  time: 6.7 --> liters=3
P: time*liter   math.floor*/

function litres(time) {
    let litresTime = (time*0.5)
    return Math.floor(litresTime)
  }