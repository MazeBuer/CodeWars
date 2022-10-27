/*Given an array of integers, find the Nth smallest element in this array of integers. Array/list size is at least 3; array/list numberss could be mixed of pos and neg and zero; repitition in array/list can occur so dont remove duplicate. 
parameter of an array and integer; no characters; no strings; only Numbers; least 3 numbers; pos/neg/zero; duplicates; array always => Nth number;
returning a single element; in the array; returning the element that is Nth smallest value
{3,1,2} ,2 -> 2
{15,20,7,10,4,3} ,3 -> 7
{177,225,243,-169,-12,-5,2,92} ,5 -> 92*/


function nthSmallest (array, num) {
    //sort the array in ascending order; order of UTF-16 unicode so for numbers it gets the first digit and orders by first digit then by next digit. 
    //sort array numerically
    //return the index of Nth element -1 (to get teh correct index #)
    return array.sort( (a,b) => a > b ? 1 : a<b ? -1 :0)[num-1]

}


console.log(nthSmallest([3,1,2] ,2), '2')
console.log(nthSmallest([15,20,7,10,4,3] ,3), '7' )
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92] ,5), '92')