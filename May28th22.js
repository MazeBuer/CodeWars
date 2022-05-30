/* Write a function that takes its speed in km per hour and returns it in cm per second, rounded down to the integer
P: will be given a speed in km 
R: return the speed in cm per second and round down a whole integer
E: 2km / hr -> 55cm / sec
P: conversion is km/hr * 27.778 = cm/sec ; use Math.floor() to round down an integer &*/

let cockroachSpeed = s = s => Math.floor(s * 27.778)

//or
Math.floor(s / 0.36)