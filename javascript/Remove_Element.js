/*
Given an integer array 'nums' and an integer 'val', remove all occurrences of 'val' in 'nums' in-place. The relative order of the elements may be changed.
*/

var removeElement = function(nums, val) {
    let k = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(val === nums[i]) {
            nums[i] = 101;
        }
        else {
            k++
        }
    }
    
    nums.sort(function(a, b) {
        return a - b
    });
    
    return k;
};