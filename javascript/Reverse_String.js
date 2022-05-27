/*
Write a function that reverses a string. The input string is given as an array of characters 's'.
*/

var reverseString = function(s) {
    let count = 1;
    
    for(let i = 0; i < s.length / 2; i++) {
        let temp = s[s.length - count]
        s[s.length - count] = s[i];
        s[i] = temp;
        count++;
    }
    
    return s;
};