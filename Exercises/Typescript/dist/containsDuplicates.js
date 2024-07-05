"use strict";
function containsDuplicate(nums) {
    let temp = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (temp.has(nums[i])) {
            return true;
        }
        temp.add(nums[i]);
    }
    return false;
}
;
