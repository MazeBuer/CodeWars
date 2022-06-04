/* You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd angle. 
P: will be given two parametes of positive integers representing degrees.
R: return the 3rd angle degree from a triangle whos complete degree is 180.
E: a= 30deg b=60deg -> c=90deg
P: a + b + c =180; 180-a-b=c */

let otherAngle = (a,b) => 180-a-b