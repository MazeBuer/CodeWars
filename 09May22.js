/* given an array of integers your solution should find the smallest integer.
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
1) sort by numbers
2) return index [0]
*/

let SmallestIntegerFinder = args => {
    let small = args.sort( (a,b) => a-b)
    return small[0]
}
