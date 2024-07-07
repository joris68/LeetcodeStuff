"use strict";
function topKFrequent(nums, k) {
    let hash = {};
    nums.forEach((item, index) => {
        hash[item] = (hash[item] || 0) + 1;
    });
    console.log(hash);
    let sorted = Object.entries(hash).sort((a, b) => b[1] - a[1]);
    console.log(sorted);
    let sliced = sorted.slice(0, k);
    return sliced.map(x => +x[0]);
}
;
let nums = [1, 1, 1, 2, 2, 3];
console.log(topKFrequent(nums, 2));
