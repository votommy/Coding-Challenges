/*
Given a string 's' consisting of words and spaces, return the length of the last word in the string.
*/

var lengthOfLastWord = function(s) {
    const sArray = s.split("");
    let activate = false;
    let wordLength = 0;
        
    for(let i = sArray.length - 1; i >= 0; i--) {
        if(sArray[i] !== ' ') {
            activate = true;
            wordLength++;
        }
        if((sArray[i] === ' ' || i === 0) && activate === true) {
            return wordLength;
        }
    }
};