/* Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a deired sum of money 'D'.
The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested. 
Note to Tax: not the invested principal is taxed, but only the year's accrued interest.
Let P be the pricipal = 1000.00
let I be the interest rate = 0.05
let T be the tax rate = 0.18
let D be the desired sum = 1100.00
P: We are given integers for P,I,T,D
R: return Y when P is == D
E: 1st year --> P = 1041.00 
2nd year --> P = 1083.86   3rd year --> P = 1128.30
P: what is the math for this equation? 
*/
function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}
