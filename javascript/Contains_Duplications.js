/*
Given an integer array 'nums', return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

var containsDuplicate = function(nums) {
    let map = new Map();
    
    for(let i of nums)
        if(map.has(i))
            return true;
        else
            map.set(i, 1);
    
    return false;
};