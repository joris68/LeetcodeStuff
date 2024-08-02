"use strict";
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    nums.forEach((index, val) => {
        if (index > 0 && val === nums[index - 1]) {
            return;
        }
        // solve twoSum with two Pointers
        let l = index + 1;
        let r = nums.length - 1;
        while (l < r) {
            let sum = val + nums[l] + nums[r];
            if (sum < 0) {
                l += 1;
            }
            else if (sum > 0) {
                r -= 1;
            }
            else {
                result.push([val, nums[l], nums[r]]);
                l += 1;
                while (nums[l] == nums[l - 1] && l < r) {
                    l += 1;
                }
            }
        }
    });
    return result;
}
function threeSumBrute(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; i < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (sum === 0 && i !== k && k !== j && i !== j) {
                    result.push([i, j, k]);
                }
            }
        }
    }
    return result;
}
;
