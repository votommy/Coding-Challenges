/*
Given an integer array 'nums' sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
*/

var removeDuplicates = function(nums) {
    let lastElement = -101;
    let k = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(lastElement === nums[i]) {
            lastElement = nums[i];
            nums[i] = 101;
        }
        else {
            lastElement = nums[i];
            k++
        }
    }
    
    nums.sort(function(a, b) {
        return a - b
    });
    
    return k;
};