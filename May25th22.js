/* Write a function bmi that calculates body mass index (bmi= weight/height^2).
if bmi <= 18.5 return 'underweight' ; if bmi <= 25.0 return 'normal' ; if bmi <= 30 return 'overweight' ; if bmi > 30 return 'obese'
P: we will be given intergers of weight and height. 
R: return the weight and height^2 and 4 conditioanls to return 'underweight' 'normal' 'obese' 'overweight'
E: given where bmi = 35 return 'obese'
P: weight / height ^2. conditonal */

function bmi(weight, height) {
  let actualBmi = weight/Math.pow(height,2)
  if(actualBmi <= 18.5) {
      return 'Underweight'
  }else if(actualBmi <= 25) {
      return 'Normal'
  }else if(actualBmi <= 30) {
      return 'Overweight'
  }else {
      return 'Obese'
  }
}

// shorter code

function bmi(weight, height) {
  
    let actualBmi  = weight/(Math.pow(height,2));
    
     return actualBmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    
    }