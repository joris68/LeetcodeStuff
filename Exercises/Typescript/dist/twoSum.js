"use strict";
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; nums.length; i++) {
            if (nums[i] + nums[j] === target)
                return [i, j];
        }
    }
    return [0, 0];
}
;
function twoSum2(nums, target) {
    let numsMap = new Map;
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (numsMap.has(diff)) {
            let temp = numsMap.get(diff);
            return [temp, i];
        }
        numsMap.set(nums[i], i);
    }
    return [0, 0];
}
