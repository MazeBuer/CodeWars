/* Take an interger n (where n >=0) and a digit d (where 0 <= d <= 9) as an integer. 
Square all the numbers k (where 0 <= k <= n) between 0 and n.
Count the numbers of digits d  used in teh writing of all thee k**2.
Call nb_dig (or nbDig or...) the function taking n and d as parameteres and returing this count. 

P: n will be greater than 0, d will be between 0-9, k will be 0-n
R: get all numbers between 0 and n and square them. find how many of those numbers contain d. return the count of those numbers that contain d.
E: n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
P: loop thru i and let k = i*i; let count = turn into a string then split(); now every digit is split filter out where n=d ; find amount of # in count */

function nbDig(n,d) {
    let count = 0;
    for (let i = 0; i <=n; i++) {
        count += (i*i).toString().split('').filter(n => n == d).length
    }
    return count
}