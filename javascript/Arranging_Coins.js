/*
You have 'n' coins and you want to build a staircase with these coins. The staircase consists of 'k' rows where the ith row has exactly 'i' coins. The last row of the staircase may be incomplete.
Given the integer 'n', return the number of complete rows of the staircase you will build.
*/

var arrangeCoins = function(n) {
    let k = 1;
    const ogn = n;
    
    for(let i = 1; i <= ogn; i++) {
        n -= i;
        
        if(n <= i) {
            return k;
        }
        
        k++;
    }
};