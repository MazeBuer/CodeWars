/* Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldnt give him any profit at all if he would buy and sell at the same price. He is going to buy for lowest and sell at hightest price. Write a funciton that returns both the minimum and maximum number of the given list/array. 
P: will array cointain string numbers? will the array ever be empty? We will be given an array of integers empty or more
R: return the lowest value and highest value, if only one return taht digigt both times.
E: [1,2,3,4,5] -> [1,5] ; [354, 5] -> [5, 354]
P: sort the array in order ascending ; return index of 0 and index of .length-1 ; get the 2 index you want and put inside [] to turn into an array of those index */

function minMax(arr) {
    arr.sort((a,b) => a-b,0)
    return [arr[0], arr[arr.length-1]]
    
}

console.log(minMax([1,6,7,3]))
