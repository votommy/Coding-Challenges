/*
You are given a large integer represented as an integer array 'digits'. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
*/

var plusOne = function(digits) {
    let wholeNum = "";
    for(let i of digits)
        wholeNum += i;
    
    let wholeNumInt = BigInt(wholeNum);
    wholeNumInt++;
    wholeNumInt += "";
    
    return wholeNumInt.split("");
};