/*Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons. Write a fucntion which verifies that a coupon code is valid and not expired. 
A coupon is no more valid on the day AFTER the expiration date. All dates will be passsed as string in this format: 'MONTH DATE, YEAR' 
P: we will be given 4 parameters with correct coupon, actual coupon, exparation date for today and correct coupon. 
R: return a boolean value if coupon codes match and current date is equal to or before expiration datae.
E: ['123','123','July 9, 2014','July 6, 2014'] -> false
P: condital statement to check if coupon codes are the same; &&  turn dates into values using Date.parse() and compare expiration date.*/


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode == correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 10, 2015"))
