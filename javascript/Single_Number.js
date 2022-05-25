/*
Given a non-empty array of integers 'nums', every element appears twice except for one. Find that single one.
*/

var singleNumber = function(nums) {
    let hashmap = new Map();
    
    for(let i of nums) {
        if(hashmap.has(i)) {
            hashmap.set(i, hashmap.get(i) + 1);
        }
        else {
            hashmap.set(i,1);
        }
    }
    
    for(let [i, j] of hashmap) {
        if(hashmap.get(i) === 1) {
            return i;
        }
    }
};