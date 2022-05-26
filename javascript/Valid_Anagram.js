/*
Given two strings 's' and 't', return true if 't' is an anagram of 's', and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

var isAnagram = function(s, t) {
    const sArray = s.split("");
    const tArray = t.split("");
    sArray.sort();
    tArray.sort();
    
    for(let i = 0; i < sArray.length; i++) {
        if(sArray.length === tArray.length && sArray[i] === tArray[i]) {
            if(i === sArray.length - 1) {
                return true;  
            }
        }
        else {
            return false;
        }
    }
};