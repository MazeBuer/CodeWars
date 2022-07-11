/* There is a bus moving in the city, and it takes and drop some people in each bus stop. 
You are proivded with a list (array) of integer pairs. Element of each pair represent people getting into the bus and people getting out (second item). 
Your task is to return a number of people who are still in the bus after the last bus station(after the last array). 
Number of people in bus will awalys be >=0; second value in first integer array is 0.
P: given an array with paired arrays inside [ [1,2], [3,4], [5,6]], first number is adding people, second is subracting people.
R: return the total number of people left on teh bus. will be 0 or a positive number; 
E: [[10,0],[3,5],[5,8]] -> 5 : 10-0 + 3-5 + 5-8 = 5
P: call an array w/in array: a[1][0] ; loop in the array and add index 0 and 1 whin the array.  */


var number = function(busStops){
    let sum = 0;
    for (let i=0; i < busStops.length; i++) {
        sum += busStops[i][0] - busStops[i][1]
    }
    return sum;
}
