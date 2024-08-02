"use strict";
// nums should be sorted!
// binary search runs in o(log n)
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.round((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        else if (target >= nums[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
;
function searchR(nums, target) {
    function searchRec(left, right) {
        if (left >= right) {
            // not found
            return -1;
        }
        // get the middle element
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            // found element
            return mid;
        }
        else if (target >= nums[mid]) {
            // take uppe half
            return searchRec(mid + 1, right);
        }
        else {
            // take lower half
            return searchRec(left, mid - 1);
        }
    }
    return searchRec(0, nums.length);
}
