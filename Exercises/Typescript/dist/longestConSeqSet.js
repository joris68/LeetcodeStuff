"use strict";
function longestConsecutive(nums) {
    let nums_set = new Set(nums);
    let longest = 0;
    for (let i = 0; i < nums.length; i++) {
        let count_seq = 0;
        if (!nums_set.has(nums[i] - 1)) {
            //might be starting og sequence
            while (nums_set.has(nums[i] + count_seq)) {
                count_seq++;
            }
            longest = Math.max(longest, count_seq);
        }
    }
    return longest;
}
let test6 = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(test6));
