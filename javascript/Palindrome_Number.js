/*
Given an integer 'x', return true if 'x' is palindrome integer.
*/

var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
  
    const xstring = x.toString();
    const xlength = xstring.length;
    const xmedian = Math.floor(xlength / 2);

    if(xlength == 1) {
        return true;
    }

    let firstHalf = "";
    let secondHalf = "";

    for(let i = 0; i < xmedian; i++) {
        firstHalf += xstring.charAt(i);
    }

    for(let i = xlength - 1; i > xmedian - 1; i--) {
        secondHalf += xstring.charAt(i);
    }

    for(let i = 0; i < firstHalf.length; i++) {
        if(firstHalf.charAt(i) === secondHalf.charAt(i)) {
            if(i == firstHalf.length - 1) {
                return true;
            }
        }
        else {
            return false;
        }

        if(i == firstHalf.length - 1) {
            return false;
        }
    }
};